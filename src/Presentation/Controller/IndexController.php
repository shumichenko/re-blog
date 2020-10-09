<?php

namespace App\Presentation\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class IndexController
 * @package App\Presentation\Controller;
 */ 
class IndexController extends AbstractController
{
    public function getUserApp() : Response
    {
        return $this->render('index/user_app.html.twig', []);
    }

    public function getAdminApp() : Response
    {
        return $this->render('index/admin_app.html.twig', []);
    }
}
