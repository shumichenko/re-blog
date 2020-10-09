<?php

namespace App\Api\Repository;

use App\Api\Entity\Article;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Article|null find($id, $lockMode = null, $lockVersion = null)
 * @method Article|null findOneBy(array $criteria, array $orderBy = null)
 * @method Article[]    findAll()
 * @method Article[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    /**
     * Returns Article instances matched query
     * 
     * @param string $searchQuery Search query
     * @param int $limit Maximum instances being fetched
     * @param int $offset Instances to skip
     * @return Article[]|null Array of Article instances
     */
    public function findMatchBy(string $searchQuery, int $limit, int $offset, bool $only_published = true): ?array
    {
        $result = $this->createQueryBuilder('article')
            ->where('article.appearance_status = :onlyPublished')
            ->andWhere('article.title LIKE :searchQuery')
            ->setParameter('onlyPublished', $only_published)
            ->setParameter('searchQuery', '%'.$searchQuery.'%')
            ->setFirstResult($offset)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
        return $result;
    }
}
