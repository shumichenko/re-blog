<?php

namespace App\Presentation\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use App\Presentation\Utility\ImagePathProvider;

/**
 * Class ImageController
 * @package App\Presentation\Controller
 */
class ImageController extends AbstractController
{
    /**
     * Returns binary of requested image
     * @param string $imageName Name of requested image
     * @return Response Binary of requested image
     */
    public function getImage(string $imageName, ImagePathProvider $imagePathProvider) : Response
    {
        $imagePath = $imagePathProvider->fileNameToPath($imageName);
        
        return file_exists($imagePath) ? 
            new BinaryFileResponse($imagePath, 200, [], true, 'inline') :
            new Response('', Response::HTTP_NOT_FOUND);
    }
}
