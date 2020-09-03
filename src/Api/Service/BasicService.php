<?php

namespace App\Api\Service;

use Doctrine\ORM\EntityManagerInterface;

/**
 * Class BasicDataService
 * @package App\Service
 */
class BasicService
{
    /**
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * BasicService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
}
