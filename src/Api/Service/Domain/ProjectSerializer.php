<?php

namespace App\Api\Service\Domain;

use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use App\Api\Service\Domain\EntitySerializer;
use App\Api\Service\Domain\SerializationContext;
use App\Api\Entity\Project;

/**
 * Class ProjectSerializer Serializes project instances
 * 
 * @package App\Api\Service\Domain
 */
class ProjectSerializer
{
    /**
     * Serializes multiple Project instances
     * 
     * @param Project[] Array of Project instances
     * @return string Serialized Project instances
     */
    public function serializeProjects(array $projects): string
    {   
        if (empty($projects))
            return '';

        $contextInstance = new SerializationContext();
        $contextInstance->setContext([
            AbstractNormalizer::IGNORED_ATTRIBUTES => ['content']
        ]);
        $contextInstance->addDefaultContext();
        $context = $contextInstance->getContext();
        
        $serializer = new EntitySerializer(new JsonEncoder, $context);
        $serializedProjects = $serializer->serializeEntity($projects, 'json');
        
        return $serializedProjects;
    }

    /**
     * Serializes single Project instance
     * 
     * @param ?Project $project Project instance to serialize
     * @return string Serialized project instance
     */
    public function serializeProject(?Project $project): string
    {
        if (is_null($project))
            return '';
        
        $contextInstance = new SerializationContext();
        $contextInstance->addDefaultContext();
        $context = $contextInstance->getContext();
        
        $serializer = new EntitySerializer(new JsonEncoder, $context);
        $serializedProject = $serializer->serializeEntity($project, 'json');

        return $serializedProject;
    }

    /**
     * Serializes number of projects
     * 
     * @param $number Number of projects
     * @return string Serialized number
     */
    public function serializeNumber(int $number): string
    {
        return 0 <= $number ? 
            json_encode(['projects_quantity' => $number]) : '';
    }
}
