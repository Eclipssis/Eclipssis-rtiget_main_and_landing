<template>
  <div class="landing-wrap">

    <client-only>
      <modal name="video-modal" :width="'60%'" :height="'auto'" class="video-modal">
        <div class="video-modal">
          
          <iframe width="100%" class="youtube-iframe" src="https://www.youtube.com/embed/6zg7wgfOwaE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
        </div>
      </modal>
    </client-only>

    <section class="jumbrone">
      <div class="container">
        <h1 class="title-h1">Сервис привлечения заказов юристам</h1>
        <p class="jumbrone__text">
          R.TIGER — это сервис, который помогает находить новые заказы, работать с 
          клиентами комфортно и безопасно, и гарантированно получать оплату за выполненную работу.
        </p>

        <a class="btn" @click="$modal.show('auth-modal')">Зарегистрироваться бесплатно</a>

        <div class="stats">
          <div class="stats__inner">
            <div class="stats__item mb-3 mb-md-0">
              <i class="icon red-check mr-2 mb-2 d-md-none"></i>
              <div class="stats__title">До 50%</div>
              <span class="stats__text">экономия бюджета на привлечении заказов </span>
            </div>

            <div class="stats__item mb-3 mb-md-0">
              <i class="icon red-check mr-2 mb-2 d-md-none"></i>
              <div class="stats__title">До 4 часов в день</div>
              <span class="stats__text">экономия времени на обработке заказов</span>
            </div>

            <div class="stats__item mb-3 mb-md-0">
              <i class="icon red-check mr-2 mb-2 d-md-none"></i>
              <div class="stats__title">7% комиссия сервиса</div>
              <span class="stats__text">больше никаких дополнительных затрат и условий </span>
            </div>

            <div class="stats__item">
              <i class="icon red-check mr-2 mb-2 d-md-none"></i>
              <div class="stats__title">1186 компаний</div>
              <span class="stats__text">подключены к сервису</span>
            </div>
          </div>
        </div>

        <div class="how-work">
          <div class="how-work__title">
            Узнайте, как работает сервис за 75 секунд
          </div>
          <p class="how-work__text d-none d-md-block">
            Уделите чуть больше 1-ой минуты на просмотр ролика, который расскажет об 
            особенностях нашего сервиса, стоимости работы и 
            <span class="highlight highlight--red">раскроет основные выгоды сотрудничества с нами.</span>
          </p>

          <div class="video-block">
            <span class="icon video-arrow d-none d-md-block"></span>

            <div class="video-inner">
              <div class="tablet d-none d-lg-block"></div>
              <div class="desktop">
                <span class="icon play-btn-big" @click="$modal.show('video-modal')"></span>
                <div class="play-text d-none d-md-block">Смотреть</div>
                <div class="play-text d-block d-md-none">Смотреть видео о сервисе</div>
              </div>
              <div class="phone d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="servise-section">
      <div class="container">
        <h2 class="title-h2">Как работает сервис</h2>

        <div class="servise-list">

          <div class="servise-list__row">
            <div class="servise-list__item">
              <div class="servise-card">
                <span class="servise-card__number d-none d-md-block">1.</span>
                <div class="servise-card__body">
                  <div class="servise-card__title">
                    <span class="servise-card__number d-inline d-md-none">1.</span>
                    Вы видите заявки от клиентов в личном кабинете
                  </div>
                  <p class="servise-card__text">
                    Заявка включает в себя описание задачи, приложенные документы и цену, которую клиент готов заплатить. 
                    <span class="highlight highlight--red">Как только вы получите заявку, на почту придет уведомление.</span> 
                    Никакого спама.
                  </p>
                </div>
              </div>
            </div>

            <div class="servise-list__item">
              <img src="@/static/content/servise-image-1.svg">
            </div>
          </div>

          <div class="servise-list__row">
            <div class="servise-list__item">
              <img src="@/static/content/servise-image-2.svg">
            </div>
            
            <div class="servise-list__item">
              <div class="servise-card">
                <span class="servise-card__number">2.</span>
                <div class="servise-card__body">
                  <div class="servise-card__title">Вы выбираете задачи, над которыми готовы работать</div>
                  <p class="servise-card__text">
                    В личном кабинете во вкладке “Заявки” вы найдете все поступившие заявки. Выбирайте те, с которыми готовы работать.
                    <span class="highlight highlight--red">Вы будете получать заявки только на услуги, которые перечислили в своём профиле.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="servise-list__row">
            <div class="servise-list__item">
              <div class="servise-card">
                <span class="servise-card__number">3.</span>
                <div class="servise-card__body">
                  <div class="servise-card__title">Клиент выбирает исполнителя для работы</div>
                  <p class="servise-card__text">
                    Клиент в своем личном кабинете видит список откликнувшихся компаний и выбирает одного исполнителя для работы. 
                    <span class="highlight highlight--red">Положительные отзывы и подробно заполненный профиль повышают шансы на то, что клиент выберет именно вас.</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="servise-list__item">
              <img src="@/static/content/servise-image-3.svg">
            </div>
          </div>

          <div class="servise-list__row">
            <div class="servise-list__item">
              <img src="@/static/content/servise-image-4.svg">
            </div>
            
            <div class="servise-list__item">
              <div class="servise-card">
                <span class="servise-card__number">4.</span>
                <div class="servise-card__body">
                  <div class="servise-card__title">Клиент вносит 100% предоплату</div>
                  <p class="servise-card__text">
                    Сервис резервирует предоплату клиента на специальном расчетном счете.  Заявка переходит в статус заказа. 
                    <span class="highlight highlight--red">Никаких рисков — вы работаете только с предоплаченными заказами.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="servise-list__row">
            <div class="servise-list__item">
              <div class="servise-card">
                <span class="servise-card__number">5.</span>
                <div class="servise-card__body">
                  <div class="servise-card__title">Работайте с клиентами откуда угодно. Сервис доступен со смартфона, планшета и компьютера</div>
                  <p class="servise-card__text">
                    Во время работы над заказом вы общаетесь с клиентом и обмениваетесь документами в защищенном онлайн-чате. 
                    <span class="highlight highlight--red">Сервис доступен из любой точки мира.</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="servise-list__item">
              <img src="@/static/content/servise-image-5.svg">
            </div>
          </div>

          <div class="servise-list__row">
            <div class="servise-list__item">
              <img src="@/static/content/servise-image-6.svg">
            </div>
            
            <div class="servise-list__item">
              <div class="servise-card">
                <span class="servise-card__number">6.</span>
                <div class="servise-card__body">
                  <div class="servise-card__title">Получение оплаты и комиссия сервиса</div>
                  <p class="servise-card__text">
                    После завершения работы над заказом и подтверждения со стороны клиента сервис переводит оплату на ваш счет за вычетом 7% комиссии сервиса. 
                    <span class="highlight highlight--red">R.TIGER берет комиссию только в том случае, если заказ выполнен. </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <section class="banner">
      <div class="container">
        <h2 class="banner__title">Получите свой первый заказ уже сегодня</h2>
        <p class="banner__text">Просто занимайтесь своим любимым делом, все остальное мы сделаем за вас.</p>
        <a class="btn" @click="$modal.show('auth-modal')">Зарегистрироваться бесплатно</a>
      </div>
    </section>

    <section class="get-orders">
      <div class="container">
        <h2 class="title-h2">Как получать заказы</h2>

        <div class="order-info">
          <div class="order-info__item">
            <span class="order-info__number">1</span>
            <p class="order-info__text">Зарегистрироваться в сервисе</p>
          </div>

          <div class="order-info__item">
            <span class="order-info__number">2</span>
            <p class="order-info__text">Заполнить информацию о вашей компании в личном кабинете</p>
          </div>

          <div class="order-info__item">
            <span class="order-info__number">3</span>
            <p class="order-info__text">Из предложенного списка юридических услуг выбрать те, которые оказывайте вы или ваша компания</p>
          </div>

          <div class="order-info__item">
            <span class="order-info__number">4</span>
            <p class="order-info__text">Для каждой услуги указать стоимость, которую вы хотите получать за услугу</p>
          </div>

          
        </div>

        <div class="get-orders__row">
          <div class="get-orders__item text-right">
            <div class="get-orders__info-block">
              <h3 class="mb-3">Советы и видеоинструкции</h3>
              <p>Мы подготовили для вас видеоинструкции, чтобы вам было проще настроить личный кабинет. Вам круглосуточно доступны онлайн-чат и горячая линия, 
                где наши специалисты ответят на любые ваши вопросы.</p>
            </div>
          </div>
          <div class="get-orders__item">
            <span class="icon play-btn"></span>
            <img src="@/static/content/order-mac.svg">
          </div>
        </div>
      </div>
    </section>

    <section class="business">
      <div class="container">
        <h2 class="title-h2">Развивайте свой бизнес вместе с нами</h2>

        <div class="business__row">
          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Привлекаем заказы для юридических компаний со всей России</div>
              <p class="business-card__text">Мы используем разные каналы привлечения заказчиков юридических услуг в наш сервис:</p>

              <ul class="business-list">
                <li class="business-list__item">
                  <div class="business-list__image">
                    <img src="@/static/content/business-list-image-1.svg" class="d-none d-md-block">
                    <i class="icon red-check mr-2 mb-2 d-md-none"></i>
                  </div>
                  <span class="business-list__text d-none d-md-block">
                    Контекстная и таргетированная реклама, продвижение в поисковых системах
                  </span>
                  <span class="business-list__text d-md-none">
                    Контекстная и таргетинговая реклама 
                  </span>
                </li>

                <li class="business-list__item">
                  <div class="business-list__image">
                    <img src="@/static/content/business-list-image-2.svg" class="d-none d-md-block">
                    <i class="icon red-check mr-2 mb-2 d-md-none"></i>
                  </div>
                  <span class="business-list__text d-none d-md-block">
                    Реклама в социальных сетях
                  </span>
                  <span class="business-list__text d-md-none">
                    Продвижение в поисковых системах 
                  </span>
                </li>

                <li class="business-list__item">
                  <div class="business-list__image">
                    <img src="@/static/content/business-list-image-3.svg" class="d-none d-md-block">
                    <i class="icon red-check mr-2 mb-2 d-md-none"></i>
                  </div>
                  <span class="business-list__text d-none d-md-block">
                    YouTube, публикации в блогах и СМИ
                  </span>
                  <span class="business-list__text d-md-none">
                    YouTube
                  </span>
                </li>

                <li class="business-list__item d-md-none">
                  <div class="business-list__image">
                    <i class="icon red-check mr-2 mb-2"></i>
                  </div>
                  <span class="business-list__text">
                    Реклама в социальных сетях. 
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="business__col">
            <img src="@/static/content/bussines-grow-1.svg">
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <img src="@/static/content/bussines-grow-2.svg">
          </div>

          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Экономим ваше время и деньги на поиске новых заказов</div>
              <p class="business-card__text">
                Больше нет необходимости тратиться на рекламу и продвижение ваших услуг в интернете. 
                <span class="highlight highlight--red">Регистрируйтесь в сервисе R.TIGER, и клиенты сами будут обращаться к  вам с заявками.</span>  
              </p>
            </div>
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Заказы, которые соответствуют вашим требованиям</div>
              <p class="business-card__text">
                Вы будете получать только те заказы от клиентов, которые соответствуют вашим требованиям по цене, специализации и локации. 
              </p>
              <p class="business-card__text">
                <span class="highlight highlight--red">Экономьте до 4 часов в день на обработке заказов:</span>
                 не нужно дополнительно запрашивать информацию у клиента — 
                <span class="highlight highlight--red">все, что необходимо для начала работы, вы найдете в одном окне.</span>
              </p>
            </div>
          </div>

          <div class="business__col">
            <img src="@/static/content/bussines-grow-3.svg">
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <img src="@/static/content/bussines-grow-4.svg">
          </div>

          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Профессиональные исполнители и честная конкуренция</div>
              <p class="business-card__text">
                В сервисе нет фрилансеров. Это помогает добиться честной конкуренции между исполнителями и исключить демпинг цен, а максимальная скидка ограничена 30%
              </p>
            </div>
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Email-уведомления при получении новых заказов</div>
              <p class="business-card__text">
                Не нужно каждый день заходить в сервис и проверять наличие новых заказов. 
                <span class="highlight highlight--red">Как только появится подходящая заявка, сервис автоматически отправит уведомление вам на почту.</span> 
              </p>
            </div>
          </div>

          <div class="business__col">
            <img src="@/static/content/bussines-grow-5.svg">
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <img src="@/static/content/bussines-grow-6.svg">
          </div>

          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Приглашайте своих сотрудников в сервис для совместной работы над проектами</div>
              <p class="business-card__text">
                Вы можете добавить неограниченное количество сотрудников в сервис и делегировать им выполнение определенных задач. 
                <span class="highlight highlight--red">Руководитель всегда имеет доступ ко всей информации.</span>
              </p>
            </div>
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Поэтапная оплата длительных проектов </div>
              <p class="business-card__text">
                В сервисе также предусмотрена поэтапная оплата длительных проектов. Разделение на этапы происходит совместно с заказчиком.
              </p>
            </div>
          </div>

          <div class="business__col">
            <img src="@/static/content/bussines-grow-7.svg">
          </div>
        </div>

        <div class="business__row">
          <div class="business__col">
            <img src="@/static/content/bussines-grow-8.svg">
          </div>

          <div class="business__col">
            <div class="business-card">
              <div class="business-card__title">Работайте с клиентами со всей России</div>
              <p class="business-card__text">
                Не ограничивайтесь пределами своего города или региона.
                <span class="highlight highlight--red">Расширяйте границы своей профессиональной деятельности и привлекайте заказы со всей России. </span>
              </p>
            </div>
          </div>
        </div>

        <div class="smi-about">
          <h3 class="smi-title">СМИ о нас</h3>

          <div class="smi">
            <div class="smi__image">
              <img src="@/static/content/smi-image-1.jpg">
            </div>
            <div class="smi__divider d-none d-md-block"></div>
            <div class="smi__inner">
              <p class="smi__text">“С помощью R.TIGER можно опубликовать заявку, зарезервировать бюджет и выбрать из откликнувшихся исполнителей лучшего всего за час”.</p>
              <a class="smi__link">Читать статью</a>
            </div>
          </div>

          <div class="smi">
            <div class="smi__image">
              <img src="@/static/content/smi-image-2.jpg">
            </div>
            <div class="smi__divider d-none d-md-block"></div>
            <div class="smi__inner">
              <p class="smi__text">“С помощью R.TIGER можно опубликовать заявку, зарезервировать бюджет и выбрать из откликнувшихся исполнителей лучшего всего за час”.</p>
              <a class="smi__link">Читать статью</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="banner">
      <div class="container">
        <h2 class="banner__title">Получите свой первый заказ уже сегодня</h2>
        <p class="banner__text">Просто занимайтесь своим любимым делом, все остальное мы сделаем за вас.</p>
        <a class="btn" @click="$modal.show('auth-modal')">Зарегистрироваться бесплатно</a>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2 class="title-h2">Ответы на часто задаваемые вопросы</h2>
      
        <div class="faq-item">
          <h3 class="faq-item__title">Что такое заявка?</h3>
          <p class="faq-item__text">Заявка — это запрос от клиента, в котором описана задача. В неё включены документы, дополнительная информация и стоимость. Вам не нужно звонить или писать клиенту, все данные по заказу вы видите в одном окне.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Как формируется стоимость заявки?</h3>
          <p class="faq-item__text">Стоимость заявки указывает клиент. При этом сервис подсказывает ему диапазон цен на нужную услугу в конкретном регионе. Если услуга выполняется удаленно, вилка цен формируется исходя из уровня цен на эту услугу по всей стране.
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Как я узнаю, что пришла новая заявка? </h3>
          <p class="faq-item__text">Как только вы получите новую заявку, сервис отправит вам уведомление на e-mail. </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Что нужно сделать, чтобы получать заказы?</h3>
          <ol>
            <li>1. Зарегистрироваться в сервисе.</li>
            <li>2. Заполнить профиль в личном кабинете.</li>
            <li>3. Выбрать из списка услуги, по которым вы хотите получать заявки.</li>
            <li>4. Указать стоимость для каждой из этих услуг.</li>
          </ol>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Как мне откликаться на заявки?</h3>
          <p class="faq-item__text">Во вкладке “Заявки” в личном кабинете откройте заявку, которую вы хотите выполнить. Нажмите на кнопку “Согласиться на выполнение”. Если нужно, задайте заказчику дополнительные вопросы. </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Есть ли в сервисе разделение на услуги для физических лиц и юридических лиц? 
          </h3>
          <p class="faq-item__text">Да, вы можете указать услуги для физических и юридических лиц отдельно. Заявки по всем услугам будут приходить в личный кабинет. Найти их можно во вкладке “Заявки”
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Когда необходимо заплатить 7%?</h3>
          <p class="faq-item__text">После выполнения заказа и подтверждения от клиента вы получаете всю сумму за вычетом 7% комиссии. Больше никаких платежей нет. Мы берем комиссию только в том случае, если заказ выполнен.</p>
        </div>
        
        <div class="faq-item">
          <h3 class="faq-item__title">Как мне получить бухгалтерские документы?</h3>
          <p class="faq-item__text">После того, как клиент подтвердит выполнение услуги, мы вышлем вам первичную документацию.</p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Откуда в сервисе заказчики?</h3>
          <p class="faq-item__text">Мы активно рекламируем услуги наших партнеров-юристов в интернете. Мы используем разные каналы привлечения заказчиков юридических услуг в наш сервис:</p>
          <ol>
            <li>1. Контекстная и таргетинговая реклама.</li>
            <li>2. Продвижение в поисковых системах.</li>
            <li>3. YouTube.</li>
            <li>4. Реклама в социальных сетях.</li>
          </ol>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Может ли клиент не заплатить?</h3>
          <p class="faq-item__text">Клиент вносит 100% предоплату еще до начала работы над задачей. Мы резервируем всю сумму у нас в сервисе. Так мы гарантируем, что исполнитель всегда получит оплату за выполненную работу</p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Работа с клиентом осуществляется по договору?</h3>
          <p class="faq-item__text">Мы работаем по онлайн <a target="_blank" href="https://rtiger.com/ru/yuridicheskaya-informatsiya/">оферте</a></p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Как мне зарегистрировать компанию?</h3>
          <p class="faq-item__text">Нажмите на кнопку “Зарегистрироваться” и следуйте инструкциям. Рекомендуем указывать почту руководителя — именно у него будут полные права при работе с сервисом.  
            Пошаговая видео-инструкция:
            <a target="_blank" href="https://www.youtube.com/watch?v=GZyv4OgEnSw">“Регистрация компании в сервисе R.TIGER”</a>
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Как мне добавить сотрудников моей компании в сервис?</h3>
          <p class="faq-item__text">Это можно сделать в личном кабинете во вкладке “Сотрудники”. Там же будет список всех, кого вы пригласили. Видео-инструкция: 
            
            <a target="_blank" href="https://www.youtube.com/watch?v=zy9mo7LboLE">“Как пригласить сотрудника в сервис R.TIGER”</a>
          </p>
        </div>

        <div class="faq-item">
          <h3 class="faq-item__title">Где сервис хранит предоплату клиента по заказу?</h3>
          <p class="faq-item__text">Мы резервируем деньги на специальном расчетном счете, используя  процессинг Сбербанка для приема платежей.</p>
        </div>

        <div class="text-center">
          <a class="btn" @click="$modal.show('auth-modal')">Зарегистрироваться бесплатно</a>
        </div>
      </div>
    </section>

  </div>
  
</template>

<script>
export default {
  name: 'Index'
}
</script>


