import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import GithubIcon from '../../images/icon/Github.svg';
import InstagramIcon from '../../images/icon/Instagram.svg';
import VkontakteIcon from '../../images/icon/Vkontakte.svg';
import ArrowDownIcon from '../../images/icon/ArrowDown.svg';
import PhpIcon from '../../images/icon/PHP.svg';
import SymfonyIcon from '../../images/icon/Symfony.svg';
import PhpUnitIcon from '../../images/icon/PHPUnit.svg';
import SQLIcon from '../../images/icon/SQL.svg';
import JsIcon from '../../images/icon/JS.svg';
import ReactIcon from '../../images/icon/React.svg';
import DoctrineIcon from '../../images/icon/Doctrine.svg';
import GitIcon from '../../images/icon/Git.svg';
import UkIcon from '../../images/icon/UK.svg';

import Contact from '../interface_elements/Contact';
import ProjectPreviewList from '../interface_elements/ProjectPreviewList';

const About = function() {
    document.title = 'ReBlog - Обо мне';

    const handleClick = function(event) {
        const blockToShow = document.getElementById('LandingBiography');
        window.scrollTo({
            left: 0, 
            top: blockToShow.offsetTop - 20, 
            behavior: 'smooth'
        });
    };

    return(
        <Fragment>
            <div className="Landing__Preview">
                <div className="Landing__Preview__Social">
                    <div className="Landing__Preview__Divider"></div>
                    <div className="Landing__Preview__Social__Links">
                        <a href="https://github.com/shumichenko" className="Landing__Preview__Link__Icon Link__Icon__Github">
                            <svg>
                                <use xlinkHref={GithubIcon+'#Github'} />
                            </svg>
                        </a>
                        <a href="https://vk.com/shumichenko" className="Landing__Preview__Link__Icon Link__Icon__Vkontakte">
                            <svg>
                                <use xlinkHref={VkontakteIcon+'#Vkontakte'} />
                            </svg>
                        </a>
                        <a href="https://instagram.com/shumichenko" className="Landing__Preview__Link__Icon Link__Icon__Instagram">
                            <svg>
                                <use xlinkHref={InstagramIcon+'#Instagram'} />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="Landing__Preview__Description">
                    <h1 className="Hide__OnExtraSmall">
                        Приветствую, меня зовут <span className="Text__Landing__Green">Игорь</span>.<br />
                        Техник по компьютерным системам,<br />
                        <span className="Text__Landing__Green">Инженер</span>-программист
                    </h1>
                    <h1 className="Show__OnExtraSmall">
                        Приветствую,<br /> меня зовут <span className="Text__Landing__Green">Игорь</span>.<br />
                        Техник по <br />компьютерным системам, <br/>
                        <span className="Text__Landing__Green">Инженер</span>-программист
                    </h1>
                    <p className="Text__Landing__Green Text__Landing__Hashtag">#блогрезюме #сайтпортфолио</p>
                    <div className="Landing__Preview__Description__Button">
                        <p className="Text__Link Text__Uppercase Link Link__Text" onClick={handleClick}>Далее 
                            <svg className="Link__Icon__ArrowDown">
                                <use xlinkHref={ArrowDownIcon+'#ArrowDown'} />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div id="LandingBiography" className="Landing__Biography">
                <div className="Landing__Biography__Section">
                    <div className="Landing__Biography__Block Text__Landing">
                        <p>
                            Мне 20 лет. Более 2-х лет занимаюсь разработкой программного обеспечения.
                            Большую часть времени посвящаю созданию back end ПО. Считаю, что общепринятые
                            методологии и стандарты играют важную роль в проектировании программного обеспечения.
                            Положительно отношусь к нововведениям и стараюсь применять их на практике.
                        </p>
                    </div>
                    <div className="Landing__Biography__Block Text__Landing">
                        <p>
                            С самого начала изучения компьютерных технологий я акцентировал внимание на формировании фундаментальных
                            знаний. По моему мнению таковые позволяют трезво видеть картину IT-мира, а также строить простые и
                            целесообразные способы решения задач, не закрепляясь за конкретными технологиями. 
                        </p>
                        <p>Процесс разработки программного обеспечения для меня - творчество.</p>
                    </div>
                </div>
                <div className="Landing__Biography__Section">
                    <div className="Landing__Biography__Block Text__Landing">
                        <h1 className="Text__Landing__Green">Технические навыки</h1>
                        <p>
                            За всё время обучения я познакомился с большим количеством компьютерных технологий и 
                            концепций веб-разработки. Я посвятил много свободного времени применению этих концепций в
                            проектах. Ниже представлены <span className="Text__Landing__Green"><b>основные</b></span> технологии, с которыми мне уже довелось поработать.
                        </p>
                    </div>
                    <div className="Landing__Biography__Block Text__Landing"></div>
                    <div className="Landing__Biography__Block Text__Landing">
                        <h3>Технологии:</h3>
                        <div className="Landing__Biography__TileDisplay">
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Php">
                                    <use xlinkHref={PhpIcon+'#PHP'} />
                                </svg>
                                PHP
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={SymfonyIcon+'#Symfony'} />
                                </svg>
                                Symfony
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={PhpUnitIcon+'#PHPUnit'} />
                                </svg>
                                PHPUnit
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={DoctrineIcon+'#Doctrine'} />
                                </svg>
                                Doctrine
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={SQLIcon+'#SQL'} />
                                </svg>
                                SQL
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={JsIcon+'#JS'} />
                                </svg>
                                JavaScript ES6
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={ReactIcon+'#React'} />
                                </svg>
                                React.js
                            </div>
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={GitIcon+'#Git'} />
                                </svg>
                                Git
                            </div>
                        </div>
                    </div>
                    <div className="Landing__Biography__Block Text__Landing">
                        <h3>Методологии:</h3>
                        <div className="Landing__Biography__TileDisplay">
                            <div className="Landing__Biography__Tile">
                                REST API
                            </div>
                            <div className="Landing__Biography__Tile">
                                MVC/MVP
                            </div>
                            <div className="Landing__Biography__Tile">
                                Event-driven (EDA)
                            </div>
                            <div className="Landing__Biography__Tile">
                                Шаблоны проектирования
                            </div>
                            <div className="Landing__Biography__Tile">
                                Стандарты PSR
                            </div>
                        </div>
                    </div>
                    <div className="Landing__Biography__Block Text__Landing">
                        <h3>Гибкие навыки:</h3>
                        <div className="Landing__Biography__TileDisplay">
                            <div className="Landing__Biography__Tile">
                                <svg className="Link__Icon__Technology">
                                    <use xlinkHref={UkIcon+'#UK'} />
                                </svg>
                                English: upper intermediate (B2)
                            </div>
                        </div>
                    </div>
                    <div className="Landing__Biography__Block Text__Landing"></div>
                </div>
                <div className="Landing__Biography__Section">
                    <div className="Landing__Biography__Block Text__Landing">
                        <h1>Образование</h1>
                        <h3>Симферопольский колледж радиоэлектроники</h3>
                        <p>09.02.01 "Компьютерные системы и комплексы"</p>
                        <h3>Квалификация: <span className="Text__Landing__Green">"Техник по компьютерным системам"</span></h3>
                    </div>
                    <div className="Landing__Biography__Block Text__Landing">
                        <h1>Мои цели</h1>
                        <p>- Принятие участия в разработке сложных и интересных проектов</p>
                        <p>- Формирование навыков организации командной разработки и автоматизации процессов</p>
                        <p>- Систематическое повышение квалификации</p>
                        <p>- Саморазвитие</p>
                    </div>
                </div>
                <div className="Landing__Biography__Section">
                    <div className="Landing__Biography__Full Text__Landing">
                        <ProjectPreviewList />
                    </div>
                </div>
                <Contact />
            </div>
        </Fragment>
    );
}

export default About;