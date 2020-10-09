<?php

namespace App\Presentation\Utility;

/**
 * Class ImageHandler Saves and fetches images
 * @package App\Presentation\Utility
 */
class ImageUploader
{
    /**
     * Returns file name 
     * @param string $fileCategory Passed file category
     * @param string $fileFormat Passed file format
     * @return string $fileName Generated file name
     */
    public function generateFileName(string $fileCategory, string $fileFormat): string
    {
        $timeHash = base64_encode(time());
        $categoryHash = hash(
            'sha256', hash('sha256', $fileCategory)
        );
        $fileName = substr($categoryHash, 0, 3) . substr($timeHash, 0, 13) . fileFormat;

        return $fileName;
    }   
}
