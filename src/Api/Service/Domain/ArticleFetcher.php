<?php

namespace App\Api\Service\Domain;

use App\Api\Entity\Article;
use App\Api\Service\Domain\DomainService;
use Symfony\Component\Serializer\Serializer;

/**
 * Class ArticleFetcher
 * 
 * @package App\Api\Service\Domain
 */
class ArticleFetcher extends DomainService
{
    /**
     * Returns number of articles
     * 
     * @param bool $only_published Allows to count unpublished articles (false statement)
     * @return int Articles quantity
     */
    public function countArticles(bool $only_published = true) : int
    {
        $articleRepository = $this->entityManager->getRepository(Article::class);
        $parameters = [];

        if (true === $only_published) 
            $parameters['appearance_status'] = 1;

        $articlesQuantity = $articleRepository->count($parameters);

        return $articlesQuantity;
    }

    /**
     * Returns an array of articles
     * 
     * @param bool $only_published Allows to fetch unpublished articles (false statement)
     * @param int $pageNumber Fetched articles page number
     * @return Article[] An array of Article::class object
     */
    public function fetchPortionOfArticles(int $pageNumber = 1, bool $only_published = true) : array
    {
        $limit = 10;
        $offset = ($pageNumber - 1) * 10;
        $articleRepository = $this->entityManager->getRepository(Article::class);
        $criteria = [];

        if (true === $only_published)
            $criteria['appearance_status'] = 1;

        $articles = $articleRepository->findBy(
            $criteria, ['created_at' => 'DESC'],
            $limit, $offset
        );

        return $articles;
    }

    /**
     * Returns single Article object
     * 
     * @param $alias URL alias parameter
     * @return Article|null Article object
     */
    public function fetchArticle(string $alias, bool $only_published = true) : ?Article
    {
        $articleRepository = $this->entityManager->getRepository(Article::class);
        
        $criteria = ['alias' => $alias];
        if (true === $only_published)
            $criteria['appearance_status'] = 1;

        $article = $articleRepository->findOneBy(
            $criteria
        );
        return $article;
    }
}
