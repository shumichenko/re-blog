<?php

namespace App\Api\Controller;

use App\Api\Service\Domain\ArticleFacade;
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
     * Returns response with list of articles
     *
     * @return JsonResponse
     */
    public function getListOfArticles(): JsonResponse
    {
        $articles = $this->articleFacade->getArticles();
        
        return empty($articles) ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NO_CONTENT) :
            JsonResponse::fromJsonString($articles);
    }

    /**
     * Returns response with common quantity of articles
     *
     * @return JsonResponse
     */
    public function getArticlesQuantity(): JsonResponse
    {
        $articlesQuantity = $this->articleFacade->getArticlesQuantity();

        return empty($articlesQuantity) ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) :
            JsonResponse::fromJsonString($articlesQuantity);
    }

    /**
     * Returns single article
     * 
     * @param string $alias Current article alias
     * @return JsonResponse
     */
    public function getArticle(string $alias): JsonResponse
    {
        $article = $this->articleFacade->getSingleArticle($alias);
        
        return empty($article) ? 
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) : 
            JsonResponse::fromJsonString($article, JsonResponse::HTTP_OK);
    }

    /**
     * Passes an article to service to upload into database
     *
     * @return JsonResponse
     */
    public function createArticle(): JsonResponse
    {
        $success = true; // TODO: write functionality
        return $success ? 
            JsonResponse::fromJsonString('', JsonResponse::HTTP_CREATED) :
            JsonResponse::fromJsonString('', JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function updateArticle(string $alias): JsonResponse 
    {
        $success = true; // TODO: write functionality
        return $success ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NO_CONTENT) :
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND);
            // HTTP_UNPROCESSABLE_ENTITY exception
    }

    public function deleteArticle(string $alias): JsonResponse
    {
        $success = true; // TODO: write functionality
        return $success ? 
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NO_CONTENT) :
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND);
    }
}
