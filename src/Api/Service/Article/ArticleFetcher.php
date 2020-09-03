<?php

namespace App\Api\Service\Article;

use App\Api\Entity\Article;
use App\Api\Service\BasicService;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;

/**
 * Class ArticleFetcher
 * @package App\Api\Service\Article
 */
class ArticleFetcher extends BasicService
{
    /*
     * I need this service to return portion of articles, but
     * for admin user it will be different. To be more precise,
     * it should return not only posted articles and should have
     * special filters for admin user.
     *
     * Tasks:
     * - add request url handling (to figure out what kind of user sent request)
     * - add POST handling (to detect query parameters)
     */

    /**
     * Returns JSON string of serialized articles
     * @return string
     */
    public function getSerializedArticles() : string
    {
        $limit = 10;
        $offset = 0;

        $articles = $this->getPortionOfArticles(true, $limit, $offset);
        $articleString = $this->serializeArticles($articles);

        return $articleString;
    }

    /**
     * Returns quantity of articles
     * @param bool $only_published Allows to count unpublished articles (false statement)
     * @return int
     */
    public function getArticlesQuantity(bool $only_published) : int
    {
        $articleRepository = $this->entityManager->getRepository(Article::class);
        $parameters = [];

        if (true === $only_published) {
            $parameters['appearance_status'] = 1;
        }
        $articlesQuantity = $articleRepository->count($parameters);

        return $articlesQuantity;
    }

    /**
     * Returns an array of articles
     * @param bool $only_published Allows to fetch unpublished articles (false statement)
     * @param int $limit Limit of articles
     * @param int $offset Number of articles should be skipped
     * @return Article[] An array of Article::class object
     */
    public function getPortionOfArticles(bool $only_published, int $limit, int $offset) : array
    {
        $articleRepository = $this->entityManager->getRepository(Article::class);
        $criteria = [];

        if (true === $only_published) {
            $criteria['appearance_status'] = 1;
        }
        $articles = $articleRepository->findBy(
            $criteria,
            ['created_at' => 'DESC'],
            $limit,
            $offset
        );

        return $articles;
    }

    /**
     * Returns single Article object
     * @param $alias URL alias parameter
     * @return Article|null Article object
     */
    public function getArticle(string $alias) : ?Article
    {
        $articleRepository = $this->entityManager->getRepository(Article::class);

        $article = $articleRepository->findOneBy(
            ['alias' => $alias]
        );
        return $article;
    }

    /**
     * Returns serialized list of articles
     * @param Article[] $articles
     * @return string JSON string
     */
    public function serializeArticles(array $articles) : string
    {
        $dateCallback = function ($innerObject) {
            return $innerObject instanceof \DateTime ? $innerObject->format(\DateTime::ISO8601) : '';
        };

        $defaultContext = [
            AbstractNormalizer::GROUPS => ['user'],
            AbstractNormalizer::CALLBACKS => [
                'created_at' => $dateCallback,
                'updated_at' => $dateCallback
            ],
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER =>
                function ($articles)  {
                    return $articles->getId();
                },
            AbstractNormalizer::IGNORED_ATTRIBUTES => [
                '__initializer__', '__isInitialized__',
                '__cloner__', 'content'
            ]
        ];
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $JsonEncoder = new JsonEncoder();
        $objectNormalizer =
            new ObjectNormalizer($classMetadataFactory, null, null,
                null, null, null,
                $defaultContext)
        ;

        $serializer = new Serializer(
            [$objectNormalizer], [$JsonEncoder]
        );

        $articles = $serializer->serialize($articles, 'json');
        return $articles;
    }

    public function getFetchParameters()
    {
        $request = Request::createFromGlobals();
    }
}
