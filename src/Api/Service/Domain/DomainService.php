<?php

namespace App\Api\Service\Domain;

use Doctrine\ORM\EntityManagerInterface;

/**
 * Class DomainService
 * 
 * @package App\Api\Service\Domain
 */
class DomainService
{
    /**
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * DomainService constructor
     * 
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
}
