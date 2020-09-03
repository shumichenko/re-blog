<?php

namespace App\Api\Controller;

use App\Api\Service\Article\ArticleFetcher;
use App\Api\Service\Article\ArticleUploader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class ArticleController
 * @package App\Api\Controller
 */
class ArticleController extends AbstractController
{
    /**
     * Passes an article to service to upload into database
     *
     * @param Request $request
     * @param ArticleUploader $articleUploader
     * @return JsonResponse
     */
    public function createArticle(Request $request, ArticleUploader $articleUploader) : JsonResponse
    {
        $data = [
            'result' => "Article successfully created!"
        ];
        return $this->respond(
            json_encode($data), JsonResponse::HTTP_CREATED
        );
    }

    /**
     * Returns response with list of articles
     *
     * @param ArticleFetcher $articleFetcher
     * @return JsonResponse
     */
    public function getListOfArticles(ArticleFetcher $articleFetcher) : JsonResponse
    {
        $articles = $articleFetcher->getSerializedArticles();
     
        return empty($articles) ?
            $this->respond('', JsonResponse::HTTP_NO_CONTENT) :
            $this->respond($articles);
    }

    /**
     * Returns response with common quantity of articles
     *
     * @param ArticleFetcher $articleFetcher
     * @return JsonResponse
     */
    public function getArticlesQuantity(ArticleFetcher $articleFetcher) : JsonResponse
    {
        $articlesQuantity = $articleFetcher->getArticlesQuantity();

        return $this->respond($articlesQuantity);
    }

    /**
     * Returns single article object
     * 
     * @param ArticleFetcher $articleFetcher
     * @return JsonResponse
     */
    public function getArticle(ArticleFetcher $articleFetcher, $alias) : JsonResponse
    {
        $article = $articleFetcher->getArticle($alias);

        return is_null($article) ? 
            $this->json('', JsonResponse::HTTP_NOT_FOUND) : 
            $this->json($article, JsonResponse::HTTP_OK);
    }

    #public function updateArticle() {}

    #public function deleteArticle() {}
    
    /**
     * Returns a JSON response
     *
     * @param $data
     * @param int $status
     * @param array $headers
     * @return JsonResponse
     */
    public function respond($data, $status = JsonResponse::HTTP_OK, $headers = []) : JsonResponse
    {
        return JsonResponse::fromJsonString($data, $status, $headers);
    }
}
