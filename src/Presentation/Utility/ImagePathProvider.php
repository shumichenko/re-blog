<?php

namespace App\Presentation\Utility;

/**
 * Class ImagePathProvider Handles image paths and categories
 * @package App\Presentation\Utility
 */
class ImagePathProvider
{
    private $imageRootDirectory;

    private $imageSubDirectories;

    /**
     * @param string $imageRootDirectory Directory where all images stored
     * @param string $imageSubDirectories Array of image subdirectories by category
     */
    public function __construct(string $imageRootDirectory, array $imageSubDirectories)
    {
        $this->imageRootDirectory = $imageRootDirectory;
        
        // Implementing accepted path category encoding
        foreach ($imageSubDirectories as $category => $path) {
            $category = substr(
                hash('sha256',
                    hash('sha256', $category)
            ), 0, 3
            );
            $newArray[$category] = $path[0];
        }
        $this->imageSubDirectories = $newArray;
    }

    /**
     * Converts file name to related local storage path
     * @param string $fileName Name of passed file
     * @return string|null Path to save the file
     */
    public function fileNameToPath(string $fileName): ?string
    {
        $fileCategory = substr($fileName, 0, 3);

        return array_key_exists($fileCategory, $this->imageSubDirectories) ? 
            ($this->imageRootDirectory . $this->imageSubDirectories[$fileCategory] . '/' . $fileName) : null;
    }

    public function getImageDirectory() : string
    {
        return $this->imageDirectory();
    }
}
