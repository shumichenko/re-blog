<?php

namespace App\Api\Service\Domain;

use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use App\Api\Service\Domain\EntitySerializer;
use App\Api\Service\Domain\SerializationContext;
use App\Api\Entity\Article;

/**
 * Class ArticleSerializer Serializes article instances
 * @package App\Api\Service\Domain
 */
class ArticleSerializer
{
    /**
     * Serializes multiple Article instances
     * @param Article[] Array of Article instances
     * @return string Serialized Article instances
     */
    public function serializeArticles(array $articles) : string
    {   
        if (empty($articles))
            return '';

        $contextInstance = new SerializationContext();
        $contextInstance->setContext([
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['content']
        ]);
        $contextInstance->addDefaultContext();
        $context = $contextInstance->getContext();
        
        $serializer = new EntitySerializer(new JsonEncoder, $context);
        $serializedArticles = $serializer->serializeEntity($articles, 'json');
        
        return $serializedArticles;
    }

    public function serializeArticle(?Article $article) : string
    {
        if (is_null($article))
            return '';
        
        $contextInstance = new SerializationContext();
        $contextInstance->addDefaultContext();
        $context = $contextInstance->getContext();
        
        $serializer = new EntitySerializer(new JsonEncoder, $context);
        $serializedArticle = $serializer->serializeEntity($article, 'json');

        return $serializedArticle;
    }

    public function serializeNumber(int $number) : string
    {
        return 0 <= $number ? 
            json_encode(['articles_quantity' => $number]) : '';
    }
}