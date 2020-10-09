<?php

namespace App\Api\Service\Application;

class UrlGenerator
{
    /**
     * Transforms string to URL acceptable form
     *
     * @param string $string String to transform
     * @return string Transformed string
     */
    public static function transformStringToUrl(string $string): string
    {
        $string = strtolower(trim($string));
        $string = preg_replace("/[^a-zA-Z0-9_]/i","-", $string);
        $string = preg_replace("/\-+/i","-", $string);
        $string = preg_replace("/(^\-)|(\-$)/i","", $string);

        return $string;
    }
}
