const PDFDocument = require('pdfkit');



exports.generatePDF = async (formData) => {
    const doc = new PDFDocument();
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
        let pdfData = Buffer.concat(buffers);
        return pdfData;
    });
    doc.font('ArialNarrow.ttf');
    doc.text('Форма відповідей:', 100, 20, {
        underline: true
    });

    doc.text('Загальні відомості', 50, 40, { 
        underline: true
    });

    doc.text(`Контактна особа(ПІБ): ${formData.contactName}`);
    doc.text(`Посада: ${formData.position}`);
    doc.text(`Телефон: ${formData.phone}`);
    doc.text(`Email: ${formData.email}`);
    doc.text(`Інше(Skype, Viber, Telegram тощо): ${formData.additionalContacts}`);
    doc.text(`Зручний період для спілкування: ${formData.communicationPeriod}`);
   
    doc.text('Інформація про компанію', 50, 150, { 
        underline: true
    });
    doc.text(`Назва компанії: ${formData.companyName}`);
    doc.text(`Сфера діяльності компанії: ${formData.businessArea}`);
    doc.text(`Позиціонування компанії(ніша): ${formData.companyPositioning}`);
    doc.text(`Основні продукти та послуги: ${formData.mainProducts}`);
    doc.text(`Переваги вашої компанії: ${formData.companyAdvantages}`);

    doc.text('Цільова аудиторія', 50, 270, { 
        underline: true
    });
    
    const ageRanges = [];
    if (formData.targetAudience.under16) ageRanges.push('До 16');
    if (formData.targetAudience.age20_25) ageRanges.push('20-25');
    if (formData.targetAudience.age30_35) ageRanges.push('30-35');
    if (formData.targetAudience.age35_40) ageRanges.push('35-40');
    if (formData.targetAudience.age40_45) ageRanges.push('40-45');
    if (formData.targetAudience.age45_50) ageRanges.push('45-50');
    if (formData.targetAudience.age50_55) ageRanges.push('50-55');
    if (formData.targetAudience.age55_60) ageRanges.push('55-60');
    if (formData.targetAudience.age60_65) ageRanges.push('60-65');
    if (formData.targetAudience.over65) ageRanges.push('Більше 65');

    doc.text(`Вік: ${ageRanges.join(', ')}`);
  
    const gender = [];
    if (formData.gender.female) gender.push('жіноча');
    if (formData.gender.male) gender.push('чоловіча');
    doc.text(`Стать: ${gender.join(', ' )}`);
    doc.text(`Рід занять: ${formData.targetAudienceOccupation}`);

    const incomeRanges = [];
    if (formData.targetAudienceIncome.income1000_5000) incomeRanges.push('1 000 - 5 000');
    if (formData.targetAudienceIncome.income5000_10000) incomeRanges.push('5 000 - 10 000');
    if (formData.targetAudienceIncome.income10000_15000) incomeRanges.push('10 000 - 15 000');
    if (formData.targetAudienceIncome.income15000_20000) incomeRanges.push('15 000 - 20 000');
    if (formData.targetAudienceIncome.income20000_25000) incomeRanges.push('20 000 - 25 000');
    if (formData.targetAudienceIncome.over25000) incomeRanges.push('більше 25 000');

    doc.text(`Дохід(грн): ${incomeRanges.join(', ')}`);
    doc.text(`Як вирішують стати клієнтом Вашої компанії?`);
    doc.text(formData.clientDecision);
    doc.text(`Навіщо їм потрібний Ваш сайт?`);
    doc.text(formData.siteNecessity);

    const customerNecessery = [];
    if (formData.custonerNessery.brandingGoal) customerNecessery.push('Імміджева мета');
    if (formData.custonerNessery.brandingGoal) customerNecessery.push('Інформування споживачів');
    if (formData.custonerNessery.clientPartnerEngagement) customerNecessery.push('Залучення клієнтів/партнерів');
    if (formData.custonerNessery.onlineSales) customerNecessery.push('Продаж товарів через Інтернет');
    if (formData.custonerNessery.advertisingRevenue) customerNecessery.push('Прибуток від реклами');
    if (formData.custonerNessery.expansionToNewMarkets) customerNecessery.push('Вихід на нові ринки');
    if (formData.custonerNessery.consumerFeedback) customerNecessery.push(`Зворотний зв'язок із споживачем`);
    doc.text(`Для чого Вам потрібен сайт:`,{ 
        underline: true
    });
    doc.text(customerNecessery.join(', ' ));

     const typeSite = [];
    if (formData.typeSite.singlePageWebsite) typeSite.push("Односторінковий сайт");
    if (formData.typeSite.businessCardWebsite) typeSite.push("Сайт візитівка");
    if (formData.typeSite.landingPage) typeSite.push("Landing page");
    if (formData.typeSite.onlineStore) typeSite.push("Інтернет магазин");
    if (formData.typeSite.catalogWebsite) typeSite.push("Сайт каталогів");
    if (formData.typeSite.corporateWebsite) typeSite.push("Корпоративний сайт");
    if (formData.typeSite.uniqueWebsite) typeSite.push("Унікальний сайт");
    if (formData.typeSite.frameworkWebsite) typeSite.push("Сайт на Framework");
    doc.text(`Тип сайту:`,{ 
        underline: true
    });
    doc.text(typeSite);
    const siteStructure = [];
    if(formData.siteStructure.yesStructure) siteStructure.push("У мене є готова структура")
    if(formData.siteStructure.noStructure) siteStructure.push("Мені потрібне проектування")
    doc.text(`Структура сайту(проектування)`,{ 
        underline: true
    });
    doc.text(typeSite);
    doc.text(`Конкуренти:`,{ 
        underline: true
    });
    doc.text(`Що унікального пропонуєте Ви у порівнянні з конкурентами, які переваги мають конкуренти?`,{ 
        underline: true
    });
    doc.text(formData.competitors);
    doc.text(`Наведіть сайти конкурентів, які вам подобаються. Опишіть, що вам подобається і не подобається у сайтах конкурентів? `,{ 
        underline: true
    });
    doc.text(formData.competitorsSites);

    doc.text(`Кольорова гама`,{ 
        underline: true
    });
    doc.text(`Кольори, які слід використовувати `,{ 
        underline: true
    });
    doc.text(formData.colorPaletteCan);
    doc.text(`Кольори, які не можна використовувати `,{ 
        underline: true
    });
    doc.text(formData.colorPalleteNot); 

    const preferredGraphics = [];
    if(formData.preferredGraphics.photo) preferredGraphics.push("Фотографічні зображення");
    if(formData.preferredGraphics.picture) preferredGraphics.push("Мальована графіка");
    doc.text(`Графіка, що переважає `,{ 
        underline: true
    });
    doc.text(preferredGraphics.join(', ' )); 

    const animations = [];
    if(formData.animation.icons) animations.push("Іконки");
    if(formData.animation.pageTransition) animations.push("Перехід між сторінками");
    if(formData.animation.siteSplash) animations.push("Заставка перед сайтом");
    if(formData.animation.designerChoice) animations.push("На розсуд дизайнера");
    if(formData.animation.logo) animations.push("Логотип");
    if(formData.animation.menu) animations.push("Меню");
    doc.text(`Анімація `,{ 
        underline: true
    });
    doc.text(animations.join(', ' )); 

    doc.text(`Ідеї `,{ 
        underline: true
    });
    doc.text(`Чи є у вас ідеї, які Ви бажаєте втілити у дизайні?`,{
        underline: true
    });
    doc.text(formData.designIdeas);
    doc.text(`Що Ви категорично не бажаєте бачити у дизайні сайту?`,{
        underline: true
    });
    doc.text(formData.avoidDesign);

    const pagesSite = [];
    if(formData.pages.homePage) pagesSite.push("Головна");
    if(formData.pages.aboutCompany) pagesSite.push("Про компанію");
    if(formData.pages.services) pagesSite.push("Послуги");
    if(formData.pages.portfolio) pagesSite.push("Портфоліо (список реалізованих робіт / проектів)");
    if(formData.pages.ourTeam) pagesSite.push("Наша команда (фото співробітників, ПІБ, посада, контакти)");
    if(formData.pages.testimonials) pagesSite.push("Відгуки (про компанію, товар або послугу)");
    if(formData.pages.news) pagesSite.push("Новини (список новин, перегляд новини)");
    if(formData.pages.articles) pagesSite.push("Статті (список статей, перегляд статті)");
    if(formData.pages.partnersClients) pagesSite.push("Партнери / клієнти (Список партнерів / клієнтів з логотипами та коротким описом кожного)");
    if(formData.pages.promotions) pagesSite.push("Акції (список акцій, перегляд акції)");
    if(formData.pages.jobVacancies) pagesSite.push("Вакансії (з формою відправки резюме)");
    if(formData.pages.blog) pagesSite.push("Блог");
    if(formData.pages.photoGallery) pagesSite.push("Фотогалерея (список альбомів, список фотографій, збільшене фото)");
    if(formData.pages.videoGallery) pagesSite.push("Відеогалерея (список альбомів, список відео, перегляд відео)");
    if(formData.pages.prices) pagesSite.push("Ціни, прайс-лист");
    if(formData.pages.events) pagesSite.push("Події, заходи (з категоріями, календарем)");
    if(formData.pages.licensesCertificates) pagesSite.push("Ліцензії, сертифікати (розділ або окремий блок на головній)");
    if(formData.pages.downloadableDocuments) pagesSite.push("Документи для скачування");
    if(formData.pages.contacts) pagesSite.push("Контакти (форма зворотного зв'язку, карта, контактні дані)");
    if(formData.pages.faq) pagesSite.push("Питання / Відповідь");
    if(formData.pages.forum) pagesSite.push("Форум (створення окремих тем для спілкування на сайті)");
    if(formData.pages.poll) pagesSite.push("Опитування");
    if(formData.pages.searchResults) pagesSite.push("Сторінка результатів пошуку (за наявності пошуку на сайті)");
    if(formData.pages.pageNotFound) pagesSite.push("Сторінка 404 (унікальний зовнішній вигляд сторінки помилки)");
    if(formData.pages.siteMap) pagesSite.push("Карта сайту");
    if(formData.pages.catalog) pagesSite.push("Каталог (список категорій, перелік товарів, картка товару)");
    if(formData.pages.orderForm) pagesSite.push("Оформлення замовлення (авторизація, доставка, оплата, підтвердження замовлення, успішне оформлення замовлення)");
    if(formData.pages.productComparison) pagesSite.push("Порівняння товарів");
    if(formData.pages.personalAccount) pagesSite.push("Особистий кабінет (особова інформація, мої замовлення, мої підписки, переглянуті товари, редагування пароля, редагування інформації)");
    if(formData.pages.wishList) pagesSite.push("Список бажань (сторінка з обраними товарами)");
    if(formData.pages.paymentDelivery) pagesSite.push("Оплата та доставка (текст + супутня графіка)");
    doc.text(`Необхідні сторінки сайту`,{ 
        underline: true
    });
    doc.text(pagesSite.join(', ' ));

    const functions = [];
    if(formData.functions.siteSearch) functions.push("Пошук по сайту");
    if(formData.functions.callbackOrder) functions.push("Замовлення зворотного дзвінка");
    if(formData.functions.interactiveMap) functions.push("Інтерактивна карта проїзду");
    if(formData.functions.socialWidgets) functions.push("Віджети соц. мереж");
    if(formData.functions.newsletterSubscription) functions.push("Підписка на розсилку новин / статей");
    if(formData.functions.onlineConsultant) functions.push("Онлайн-консультант");
    if(formData.functions.internalBannerAdvertising) functions.push("Внутрішня банерна реклама (використовується для акценту відвідувачів на цільових сторінках сайту - акції, розпродажі, бонуси, спецпропозиції)");
    if(formData.functions.floatingCart) functions.push("Спливаючий кошик товарів");
    if(formData.functions.quickView) functions.push("Швидкий перегляд товару");
    if(formData.functions.registrationAuthorization) functions.push("Реєстрація / Авторизація");
    if(formData.functions.catalogSearchFilter) functions.push("Фільтр пошуку за каталогом (фільтр дозволяє відображати товари за певними параметрами, наприклад за кольором, виробником, розміром тощо)");
    if(formData.functions.catalogSorting) functions.push("Сортування за каталогом (модуль дозволяє сортувати товари за ціною, новизною, популярністю.)");
    if(formData.functions.recommendedProducts) functions.push("Рекомендовані товари (з цим товаром також купують)");
    if(formData.functions.discountCalculation) functions.push("Розрахунок знижок (залежно від суми замовлення або за іншими критеріями)");
    if(formData.functions.bookingSystem) functions.push("Система бронювання");
    if(formData.functions.onlineTryOn) functions.push("Онлайн приміряння(новинки, популярне)");
    if(formData.functions.orderStatusNotification) functions.push("Система сповіщення покупців про статус замовлення");
    if(formData.functions.smsNotification) functions.push("СМС розсилання");
    if(formData.functions.paymentSystems) functions.push("Системи оплати кредитними картками та електронними грошима");
    if(formData.functions.invoiceGeneration) functions.push("Формування рахунку / квитанції для оплати");
    if(formData.functions.dataImportExport) functions.push("Імпорт/Експорт даних з/в .XLS, .CSV, .XML");
    if(formData.functions.customerSupportSystem) functions.push("Система підтримки клієнтів (система тикетів)");
    if(formData.functions.costCalculationCalculator) functions.push("Калькулятор розрахунку вартості (з відправкою розрахунку клієнту та адміністратору сайту)");
    if(formData.functions.geographicalRegionDetection) functions.push("Автоматичне визначення географічного регіону відвідувача");
    doc.text(`Необхідний функціонал сайту`,{ 
        underline: true
    });
    doc.text(functions.join(', ' ));

    const languages = [];
    if(formData.languages.ukr) languages.push("Українська");
    if(formData.languages.eng) languages.push("Англійська");
    doc.text(`Мовні версій сайту`,{ 
        underline: true
    });
    doc.text(languages.join(', ' ));
    doc.text(`Інші мови: ${formData.otherLanguages}`);
    
    doc.text(`Підготовка контенту для сайту:`,{ 
        underline: true
    });
    if(formData.text.yesText) doc.text(`Чи маєте Ви унікальні тексти для сайту?: Так`);
    if(formData.text.laterText) doc.text(`Чи маєте Ви унікальні тексти для сайту?: Буде пізнше`);
    if(formData.text.needText) doc.text(`Чи маєте Ви унікальні тексти для сайту?: Потрібно написати`);
 
    if(formData.photo.yesPhoto) doc.text(`Чи є у Вас якісні авторські фото для сайту? : Так`);
    if(formData.photo.noPhoto) doc.text(`Чи є у Вас якісні авторські фото для сайту? : Ні`);
    if(formData.photo.laterPhoto) doc.text(`Чи є у Вас якісні авторські фото для сайту? : Будуть пізніше`);

    if(formData.video.yesVideo) doc.text(`Чи є у Вас відео для сайту? : Так`);
    if(formData.video.noVideo) doc.text(`Чи є у Вас відео для сайту?  : Ні`);
    if(formData.video.laterVideo) doc.text(`Чи є у Вас відео для сайту?  : Будуть пізніше`);
    doc.text(`Подальший розвиток та реклама: `,{ 
        underline: true
    });
    doc.text(`Хто буде здійснювати підтримку та оновлення сайту?: ${formData.support}`);

    if(formData.promotionInSearch.yesPromotionInSearch) doc.text(`Чи планується просування сайту у пошукових системах?: Так`);
    if(formData.promotionInSearch.noPromotionInSearch) doc.text(`Чи планується просування сайту у пошукових системах?: Ні`);
    if(formData.promotionInSearch.needConsultInPromotionInSearch) doc.text(`Чи планується просування сайту у пошукових системах?: Потрібна консультація`);

    if(formData.promotionInSocial.yesPromotionInSocial) doc.text(`Чи розглядаєте Ви можливість просування сайту у соціальних мережах? : Так`);
    if(formData.promotionInSocial.noPromotionInSocial) doc.text(`Чи розглядаєте Ви можливість просування сайту у соціальних мережах? : Ні`);
    if(formData.promotionInSocial.needConsultInPromotionInSocial) doc.text(`Чи розглядаєте Ви можливість просування сайту у соціальних мережах? : Потрібна консультація`);
    doc.text(`Бюджет та терміни: `,{ 
        underline: true
    });
    doc.text(`Очікуваний бюджет на розробку сайту в грн. : ${formData.expectedBudget}`);
    doc.text(`Бажаний термін здачі проекту в місяцях : ${formData.desiredProjectDeadline}`);
    doc.text(`Обов'язковий термін здачі проекту в місяцях : ${formData.mandatoryProjectDeadline}`);
    doc.text(`Додаткова інформація: `,{ 
        underline: true
    });
    doc.text(formData.additionally);
    doc.end();

    return new Promise((resolve, reject) => {
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });
    });
};
