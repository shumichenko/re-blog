<?php

namespace App\Api\Controller;

use App\Api\Service\Domain\ArticleFacade;
use App\Api\Service\Domain\ArticleUploader;
use App\Api\Service\Domain\ArticleFetcher;
use App\Api\Service\Domain\ArticleSerializer;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class ArticleController
 * 
 * @package App\Api\Controller
 */
class ArticleController extends AbstractController
{
    private $articleFacade;

    /**
     * ArticleController constructor
     * 
     * @param ArticleFacade $articleFacade Service interaction class
     */
    public function __construct(ArticleFacade $articleFacade)
    {
        $this->articleFacade = $articleFacade;
    }
    /**
     * Passes an article to service to upload into database
     *
     * @param ArticleUploader $articleUploader
     * @return JsonResponse
     */
    public function createArticle() : JsonResponse
    {
        return JsonResponse::fromJsonString('', JsonResponse::HTTP_CREATED);
        // $this->respond('', JsonResponse::HTTP_UNPROCESSABLE_ENTITY)
    }

    /**
     * Returns response with list of articles
     *
     * @param ArticleFetcher $articleFetcher
     * @return JsonResponse
     */
    public function getListOfArticles() : JsonResponse
    {
        $articles = $this->articleFacade->getArticles();
     
        return empty($articles) ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NO_CONTENT) :
            JsonResponse::fromJsonString($articles);
    }

    /**
     * Returns response with common quantity of articles
     *
     * @param ArticleFetcher $articleFetcher
     * @return JsonResponse
     */
    public function getArticlesQuantity() : JsonResponse
    {
        $articlesQuantity = $this->articleFacade->getArticlesQuantity();

        return empty($articlesQuantity) ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) :
            JsonResponse::fromJsonString($articlesQuantity);
    }

    /**
     * Returns single article object
     * 
     * @param ArticleFetcher $articleFetcher
     * @return JsonResponse
     */
    public function getArticle($alias) : JsonResponse
    {
        $article = $this->articleFacade->getSingleArticle($alias);
        
        return empty($article) ? 
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) : 
            JsonResponse::fromJsonString($article, JsonResponse::HTTP_OK);
    }

    #public function updateArticle() {}

    #public function deleteArticle() {}
}
