<?php

namespace App\Api\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Api\Repository\ArticleRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 * @UniqueEntity("alias")
 */
class Article
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"admin", "user"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=600, unique=true)
     * @Groups({"admin", "user"})
     */
    private $alias;

    /**
     * @ORM\Column(type="string", length=400)
     * @Groups({"admin", "user"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=800)
     * @Groups({"admin", "user"})
     */
    private $description;

    /**
     * @ORM\Column(type="text")
     * @Groups({"admin", "user"})
     */
    private $content;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"admin", "user"})
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"admin", "user"})
     */
    private $updated_at;

    /**
     * @ORM\Column(type="string", length=600, nullable=true)
     * @Groups({"admin", "user"})
     */
    private $image_link;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"admin"})
     */
    private $appearance_status;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="articles")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"admin", "user"})
     */
    private $author;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAlias(): ?string
    {
        return $this->alias;
    }

    public function setAlias(string $alias): self
    {
        $additionalHash = substr(
            hash('sha256', time()), 0, 10
        );
        $this->alias = $alias . "-" . $additionalHash;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getImageLink(): ?string
    {
        return $this->image_link;
    }

    public function setImageLink(string $image_link): self
    {
        $this->image_link = $image_link;

        return $this;
    }

    public function getAppearanceStatus(): ?bool
    {
        return $this->appearance_status;
    }

    public function setAppearanceStatus(bool $appearance_status): self
    {
        $this->appearance_status = $appearance_status;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }
}
