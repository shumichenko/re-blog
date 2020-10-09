<?php

namespace App\Api\Controller;

use App\Api\Service\Domain\ProjectFacade;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class ProjectController
 * 
 * @package App\Api\Controller
 */
class ProjectController extends AbstractController
{
    private $projectFacade;

    /**
     * ProjectController constructor
     * 
     * @param ProjectFacade $projectFacade Service interaction class
     */
    public function __construct(ProjectFacade $projectFacade)
    {
        $this->projectFacade = $projectFacade;
    }
    
    /**
     * Returns response with list of projects
     *
     * @return JsonResponse
     */
    public function getListOfProjects(): JsonResponse
    {
        $projects = $this->projectFacade->getProjects();
        
        return empty($projects) ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NO_CONTENT) :
            JsonResponse::fromJsonString($projects);
    }

    /**
     * Returns response with common quantity of projects
     *
     * @return JsonResponse
     */
    public function getProjectsQuantity(): JsonResponse
    {
        $projectsQuantity = $this->projectFacade->getProjectsQuantity();

        return empty($projectsQuantity) ?
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) :
            JsonResponse::fromJsonString($projectsQuantity);
    }

    /**
     * Returns single project
     * 
     * @param string $alias Current project alias
     * @return JsonResponse
     */
    public function getProject(string $alias): JsonResponse
    {
        $project = $this->projectFacade->getSingleProject($alias);
        
        return empty($project) ? 
            JsonResponse::fromJsonString('', JsonResponse::HTTP_NOT_FOUND) : 
            JsonResponse::fromJsonString($project, JsonResponse::HTTP_OK);
    }
}
