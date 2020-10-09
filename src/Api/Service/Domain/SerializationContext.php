<?php

namespace App\Api\Service\Domain;

use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

/**
 * Class SerializationContext Helps to define context
 * 
 * @package App\Api\Service\Domain
 */
class SerializationContext
{
    private $context = [];
    
    /**
     * SerializationContext constructor
     * Adds default context by creating an instance
     */
    public function __construct()
    {
        $this->addDefaultContext();
    }
    
    /**
     * Adds default context to the current context
     * 
     * @return void
     */
    public function addDefaultContext(): void
    {
        $dateCallback = function ($innerObject) {
            return $innerObject instanceof \DateTime ? $innerObject->format(\DateTime::ISO8601) : '';
        };
    
        $defaultContext = [
            AbstractNormalizer::GROUPS => ['user'],
            AbstractNormalizer::IGNORED_ATTRIBUTES => [
                '__initializer__', '__isInitialized__',
                '__cloner__'
            ],
            AbstractNormalizer::CALLBACKS => [
                'created_at' => $dateCallback,
                'updated_at' => $dateCallback
            ]
        ];
    
        foreach ($defaultContext as $definition => $value) {
            array_key_exists($definition, $this->context) ?
                $this->context[$definition] = array_merge($this->context[$definition], $value) :
                $this->context += [$definition => $value];
        }
    }

    /**
     * Rewrites context
     * 
     * @param array $context Array with context definitions
     * @return void
     */
    public function setContext(array $context): void
    {
        $this->context = $context;
    }

    /**
     * Returns current context array
     * 
     * @return array Current context
     */
    public function getContext(): array
    {
        return $this->context;
    }

}
