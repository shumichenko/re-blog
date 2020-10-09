<?php

namespace App\Api\Service\Domain;

use App\Api\Entity\Project;
use App\Api\Service\Domain\DomainService;
use Symfony\Component\Serializer\Serializer;

/**
 * Class ProjectFetcher
 * 
 * @package App\Api\Service\Domain
 */
class ProjectFetcher extends DomainService
{
    /**
     * Returns number of projects
     * 
     * @pram bool $only_published Allows to count unpublished projects (false statement)
     * @return int Projects quantity
     */
    public function countProjects(bool $only_published = true) : int
    {
        $projectRepository = $this->entityManager->getRepository(Project::class);
        $parameters = [];

        if (true === $only_published) 
            $parameters['appearance_status'] = 1;

        $projectsQuantity = $projectRepository->count($parameters);

        return $projectsQuantity;
    }

    /**
     * Returns an array of projects
     * 
     * @param bool $only_published Allows to fetch unpublished projects (false statement)
     * @param int $pageNumber Fetched projects page number
     * @return Project[] An array of Project::class object
     */
    public function fetchPortionOfProjects(
        int $pageNumber = 1, 
        int $limit = 10,
        bool $only_published = true
    ) : array {
        ($pageNumber >= 1) || $pageNumber = 1;
        ($limit < 10 && $limit >= 1) || $limit = 10;
        $offset = ($pageNumber - 1) * $limit;

        $criteria = [];
        if (true === $only_published)
            $criteria['appearance_status'] = 1;
        $projectRepository = $this->entityManager->getRepository(Project::class);
        
        $projects = $projectRepository->findBy(
            $criteria, ['created_at' => 'DESC'],
            $limit, $offset
        );
        
        return $projects;
    }

    /**
     * Returns single Project object
     * 
     * @param $alias URL alias parameter
     * @return Project|null Project object
     */
    public function fetchProject(string $alias, bool $only_published = true) : ?Project
    {
        $projectRepository = $this->entityManager->getRepository(Project::class);
        
        $criteria = ['alias' => $alias];
        if (true === $only_published)
            $criteria['appearance_status'] = 1;

        $project = $projectRepository->findOneBy(
            $criteria
        );
        return $project;
    }
}
