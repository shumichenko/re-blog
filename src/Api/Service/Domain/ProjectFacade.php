<?php

namespace App\Api\Service\Domain;

use App\Api\Service\Domain\ProjectFetcher;
use App\Api\Service\Domain\ProjectSerializer;
use App\Api\Service\Application\RequestParametersProvider;

/**
 * Class ProjectFacade Helps to interact with related services
 * Delegates some responsibilities
 * 
 * @package App\Api\Service\Domain
 */
class ProjectFacade
{
    private $projectFetcher;
    
    private $projectUploader;

    private $projectSerializer;

    /**
     * ProjectFacade constructor
     * 
     * @param ProjectFetcher $projectFetcher
     * @param ProjectUploader $projectUploader
     * @param ProjectSerializer $projectSerializer
     */
    public function __construct(
        ProjectFetcher $projectFetcher, 
        ProjectUploader $projectUploader,
        ProjectSerializer $projectSerializer 
        )
    {
        $this->projectFetcher = $projectFetcher;
        $this->projectUploader = $projectUploader;
        $this->projectSerializer = $projectSerializer;
    }

    /**
     * Returns prepared Project instances
     * 
     * @return string String of Project instances
     */
    public function getProjects() : string
    {
        $requestParameters = RequestParametersProvider::getParameters(['page_number', 'limit', 'search']);
        $pageNumber = $requestParameters['page_number'] ?? 1;
        $limit = $requestParameters['limit'] ?? 10;
        $searchQuery = $requestParameters['search'] ?? '';
       
        $projects = $this->projectFetcher->fetchPortionOfProjects($pageNumber, $limit, $searchQuery);
        $serializedProjects = $this->projectSerializer->serializeProjects($projects);

        return $serializedProjects;
    }

    /**
     * Returns prepared single Project instance
     * 
     * @param string $alias Alias of required project 
     * @return string String of Project instances
     */
    public function getSingleProject(string $alias) : string
    {
        $project = $this->projectFetcher->fetchProject($alias);
        $serializedProject = $this->projectSerializer->serializeProject($project);

        return $serializedProject;
    }

    /**
     * Returns JSON with projects quantity
     * 
     * @return string Projects quantity
     */
    public function getProjectsQuantity() : string
    {
        $number = $this->projectFetcher->countProjects();
        $serializedNumber = $this->projectSerializer->serializeNumber($number);
        return $serializedNumber;
    }
}
