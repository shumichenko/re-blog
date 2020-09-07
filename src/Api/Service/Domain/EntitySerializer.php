<?php

namespace App\Api\Service\Domain;

use Symfony\Component\Serializer\Serializer;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Encoder\EncoderInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;

/**
 * Class EntitySerializer Serializes entities
 * 
 * @package App\Api\Service\Domain
 */
class EntitySerializer 
{
    protected $classMetadataFactory;

    protected $encoder;

    protected $normalizer;

    /**
     * EntitySerializer constructor
     * 
     * @param EncoderInterface $encoder Needed encoder object for serialization
     * @param array $context Needed serialization context
     */
    public function __construct(EncoderInterface $encoder, array $context = [])
    {
        $this->classMetadataFactory = new ClassMetadataFactory(
            new AnnotationLoader(new AnnotationReader())
        );
        $this->encoder = $encoder;
    
        $this->normalizer = new ObjectNormalizer(
            $this->classMetadataFactory, null, null,
            null, null, null, $context
        );
    }

    /**
     * Serializes passed entity
     * 
     * @param $entity Entity to serialize
     * @param string $dataType Serialization data type name
     * @return string Serialized entity
     */
    public function serializeEntity($entity, string $dataType) : string
    {
        $serializer = new Serializer(
            [$this->normalizer], [$this->encoder]
        );
        $serializedEntity = $serializer->serialize($entity, $dataType);

        return $serializedEntity;
    }
}
