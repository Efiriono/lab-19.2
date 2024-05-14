/* Тестовые данные */

const terms = [
  {
    key: 'А',
    items: [
      {
        term: 'Авторитетность',
        description: '<p>Имеющий <a href="#">авторитет</a>, заслуживающий признания, доверия и уважения.</p><p>Как видите, работа даже такого бесспорно авторитетного режиссёра, как Станиславский, подвергалась некоторому сомнению со стороны критики. Блейхман отвечал без лишних слов: Совет для анархистов совершенно не авторитетен; если к его решению присоединятся большевики, то это ничего не значит, Совет в целом служит буржуазии и помещикам; никаких определённых намерений у анархистов на завтра нет; участвовать в манифестации они будут ― со своими чёрными знамёнами, а насчет того, будут ли с оружием, то, может быть, пойдут без оружия, а может быть, и с оружием.</p>',
        cite: 'Н. Н. Суханов, «Записки о революции / Книга 4», 1918–1921 г. (цитата из Национального корпуса русского языка, см. Список литературы)',
      },
      {
        term: 'Адаптация',
        description: '<p><dfn>Адапта́ция</dfn> (лат. adapto «приспособляю») — приспособление строения и функций организма, его органов и клеток к условиям внешней среды. Процессы адаптации направлены на сохранение <a href="#">гомеостаза</a>.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Аддикция',
        description: '<p><dfn>Адди́кция</dfn> (<a href="#">англ.</a> <i>addiction</i> — зависимость, пагубная привычка, привыкание), в широком смысле, — ощущаемая человеком навязчивая потребность в определённой деятельности. Термин часто употребляется для таких явлений, как лекарственная зависимость, наркомания, но теперь больше применяется не к химическим, а к психологическим зависимостям, например, поведенческим, примерами которых могут служить: интернет-зависимость, игромания, шопоголизм, психогенное переедание, фанатизм, зависимость от порнографии и т. п.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Альтруизм',
        description: '<p><dfn>Альтруи́зм</dfn> (<a href="#">лат.</a> <i>Alter</i> — другой, другие) — понятие, которым осмысляется активность, связанная с бескорыстной заботой о благополучии других; соотносится с понятием самоотверженность — то есть с приношением в жертву своих выгод в пользу блага другого человека, других людей или в целом — ради общего блага.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Атрибуция',
        description: '<p><dfn>Атрибуция</dfn> (<a href="#">лат.</a> <i>attributio</i> — приписывание) — психологический термин, обозначающий механизм объяснения причин поведения другого человека.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Аффилиация',
        description: '<p><dfn>Аффилиация</dfn> (аффиляция, <a href="#">англ.</a> <i>affiliation</i> — «соединение, связь» от позднелатинского filialis — <a href="#">«сыновний»</a>) — это стремление быть в обществе других людей, потребность человека в создании тёплых, доверительных, эмоционально значимых отношений с другими людьми. Стремление к сближению с людьми, <a href="#">дружба</a>, <a href="#">любовь</a>, <a href="#">общение</a> — всё это попадает под понятие аффилиация. Формирование данной потребности обусловлено характером взаимоотношений с родителями и сверстниками в раннем детстве и может нарушаться при ситуациях, сопряжённых с тревогой, неуверенностью в себе и приводящих к возникновению чувства одиночества, беспомощности.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'Б',
    items: [
      {
        term: 'Базальные эмоции',
        description: '<p><dfn>Базальные эмоции</dfn> — теоретический конструкт, объединяющий эмоции минимального набора, на базе которых формируется все многообразие эмоциональных процессов и состояний. К подобным эмоциям относят эмоции радости, горя (печали), страха, гнева, удивления, отвращения.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
      {
        term: 'Бионика',
        description: '<p><dfn>Био́ника</dfn> (от <a href="#">др.-греч.</a> βίον «живущее») — прикладная наука о применении в технических устройствах и системах принципов организации, свойств, функций и структур живой природы, то есть формах живого в природе и их промышленных аналогах.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'В',
    items: [
      {
        term: 'Внушаемость',
        description: '<p><dfn>Внушаемость</dfn> — степень восприимчивости к внушению, определяемая субъективной готовностью подвергнуться и подчиниться внушающему воздействию.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'Г',
    items: [
      {
        term: 'Групповой нарциссизм',
        description: '<p><dfn>Групповой нарциссизм</dfn>(или коллективный нарциссизм) — феномен, при котором индивиды преувеличивают позитивный образ и важность группы, к которой принадлежат. В то время как классическое определение нарциссизма фокусируется на личности, групповой нарциссизм утверждает, что у него может быть подобное чрезмерно высокое мнение о группе, а также, что группа может функционировать как нарциссическая сущность.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'Д',
    items: [
      {
        term: 'Дебрифинг',
        description: '<p><dfn>Дебри́финг</dfn>одноразовая слабоструктурированная психологическая беседа с человеком, пережившим экстремальную ситуацию или психологическую травму. В большинстве случаев целью дебрифинга является уменьшение нанесённого жертве психологического ущерба путём объяснения человеку, что с ним произошло, и выслушивания его точки зрения.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'Е',
    items: [],
  },
  {
    key: 'Ж',
    items: [],
  },
  {
    key: 'И',
    items: [
      {
        term: 'Индивидуация',
        description: '<p><dfn>Индивидуа́ция</dfn> — одно из основных понятий аналитической психологии Карла Густава Юнга (1875—1961), означающее, характеризующее и трактующее процесс становления личности, такого психологического развития её, при котором реализуются и воплощаются, усиливаются и ускоряются индивидуальные задатки и уникальные особенности человека, черты, грани и свойства, присущие подобному лицу.</p>',
        cite: 'Материал из Википедии — свободной энциклопедии',
      },
    ],
  },
  {
    key: 'К',
    items: [],
  },
  {
    key: 'Л',
    items: [],
  },
  {
    key: 'М',
    items: [],
  },
  {
    key: 'Н',
    items: [],
  },
  {
    key: 'О',
    items: [],
  },
  {
    key: 'П',
    items: [],
  },
  {
    key: 'Р',
    items: [],
  },
  {
    key: 'С',
    items: [],
  },
  {
    key: 'Т',
    items: [],
  },
  {
    key: 'У',
    items: [],
  },
  {
    key: 'Ф',
    items: [],
  },
  {
    key: 'Х',
    items: [],
  },
  {
    key: 'Ч',
    items: [],
  },
  {
    key: 'Ш',
    items: [],
  },
  {
    key: 'Э',
    items: [],
  },
  {
    key: 'Ю',
    items: [],
  },
];

const navContainer = document.querySelector('.site-nav');
const glossaryContainer = document.querySelector('.glossary');
const modalContainer = document.querySelector('.modal');

const addChildElementsFromString = (parent, domString) => {
  parent.innerHTML = '';
  parent.insertAdjacentHTML('beforeend', domString);
};

const createNavItemString = ({ key, items }) =>
  `<li class="site-nav-item">
    <a class="site-nav-link" ${items.length > 0 ? `href="#${key}"` : ''} >${key}</a>
  </li>
`;

const createSectionString = ({ key, items }) => {
  if (items.length > 0) {
    return `<section class="glossary-section">
        <h2 id="${key}">${key}</h2>
        <ul class="glossary-list">
          ${items.map(({ term }) => {
      return `<li class="glossary-item">
              <a data-value="${term}" href="#">${term}</a>
            </li>`
    }).join('')}
        </ul>
      </section>
    `;
  }
};

const createModalTermString = ({ description, cite }) =>
  `<div class="modal-popup">
        <button class="close-button" type="button">
          <span class="visually-hidden">Закрыть окно</span>
        </button>
        <div class="modal-content">
           <p>${description}</p>
           <cite>${cite}</cite>
        </div>
      </div>
`;

const render = () => {
  const navElementsString = terms.map(createNavItemString).join('');
  const termsElementsString = terms.map(createSectionString).join('');


  addChildElementsFromString(navContainer, navElementsString);
  addChildElementsFromString(glossaryContainer, termsElementsString);
}

const setTermActive = (target) => {
  const activeTerm = glossaryContainer.querySelector('.term-link.active');
  if (activeTerm) {
    activeTerm.classList.remove('active');
  }


  target.classList.add('active');
};

const termClickHandler = (evt) => {
  const element = evt.target.closest('a');


  if (!element) {
    return;
  }
  evt.preventDefault();


  const { value } = element.dataset;


  const termsGroup = terms.find(({ key }) => value.toUpperCase().indexOf(key.toUpperCase()) === 0);


  if (termsGroup && termsGroup.items) {
    const currentTerm = termsGroup.items.find((item) => item.term === value);

    if (currentTerm) {
      const termString = createModalTermString(currentTerm);

      addChildElementsFromString(modalContainer, termString);
      setTermActive(element);

      modalContainer.classList.add('modal.show');
      modalContainer.classList.remove('modal');
    }
  }
};

const exitClickHandler = (evt) => {
  const element = evt.target.closest('button');

  if (!element) {
    return;
  }

  modalContainer.classList.remove('modal.show');
  modalContainer.classList.add('modal');
}

const navItemsClickHandler = (evt) => {
  const element = evt.target.closest('a');


  if (!element) {
    return;
  }
  evt.preventDefault();


  const blockId = element.getAttribute('href');


  if (blockId && blockId !== '#') {
    const block = document.querySelector(blockId);


    if (block) {
      block.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};

const init = () => {
  render();


  glossaryContainer.addEventListener('click', termClickHandler);
  navContainer.addEventListener('click', navItemsClickHandler);
  modalContainer.addEventListener('click', exitClickHandler);
};

init();