<?php

namespace App\Api\Service\Domain;

use App\Api\Service\Domain\ArticleFetcher;
use App\Api\Service\Domain\ArticleSerializer;
use App\Api\Service\Application\RequestParametersProvider;

class ArticleFacade
{
    private $articleFetcher;
    
    private $articleSerializer;

    /**
     * ArticleFacade constructor
     * 
     * @param ArticleFetcher $articleFetcher
     * @param ArticleSerializer $articleFetcher
     */
    public function __construct(ArticleFetcher $articleFetcher, ArticleSerializer $articleSerializer)
    {
        $this->articleFetcher = $articleFetcher;
        $this->articleSerializer = $articleSerializer;
    }

    /**
     * Returns prepared Article instances
     * 
     * @return string String of Article instances
     */
    public function getArticles() : string
    {
        $requestParameters = RequestParametersProvider::getParameters(['page_number']);
        isset($requestParameters['page_number']) && (1 <= $requestParameters['page_number']) ?
            $pageNumber = $requestParameters['page_number'] :
            $pageNumber = 1;
       
        $articles = $this->articleFetcher->fetchPortionOfArticles($pageNumber);
        $serializedArticles = $this->articleSerializer->serializeArticles($articles);

        return $serializedArticles;
    }

    /**
     * Returns prepared single Article instance
     * 
     * @param string $alias Alias of required article 
     * @return string String of Article instances
     */
    public function getSingleArticle(string $alias) : string
    {
        $article = $this->articleFetcher->fetchArticle($alias);
        $serializedArticle = $this->articleSerializer->serializeArticle($article);

        return $serializedArticle;
    }

    /**
     * Returns JSON with articles quantity
     * 
     * @return string Articles quantity
     */
    public function getArticlesQuantity() : string
    {
        $number = $this->articleFetcher->countArticles();
        $serializedNumber = $this->articleSerializer->serializeNumber($number);
        return $serializedNumber;
    }
}