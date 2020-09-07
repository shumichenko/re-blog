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
    /**
     * Passes an article to service to upload into database
     *
     * @param ArticleUploader $articleUploader
     * @return JsonResponse
     */
    public function createArticle(ArticleUploader $articleUploader) : JsonResponse
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
    public function getListOfArticles(ArticleFacade $articleFacade) : JsonResponse
    {
        $articles = $articleFacade->getArticles();
     
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
    public function getArticlesQuantity(ArticleFacade $articleFacade) : JsonResponse
    {
        $articlesQuantity = $articleFacade->getArticlesQuantity();

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
    public function getArticle(ArticleFacade $articleFacade, $alias) : JsonResponse
    {
        $article = $articleFacade->getSingleArticle($alias);
        
        return empty($article) ? 
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) : 
            JsonResponse::fromJsonString($article, JsonResponse::HTTP_OK);
    }

    #public function updateArticle() {}

    #public function deleteArticle() {}
}
