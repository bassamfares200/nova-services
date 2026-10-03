/* =========================================================
   NOVA SERVICES
   WhatsApp Request Form
   Phase 1 + Phase 2 + Phase 3 + Phase 4
========================================================= */


/* =========================================================
   1. CONFIGURATION
========================================================= */

const CONFIG = {

    companyName: "Nova Services",

    whatsappNumber: "96599408471",

    defaultLanguage: "en",

    maxMessageLength: 500,

    maxImageSizeMB: 5,

    /*
        ضع مسار شعار الشركة هنا.
        مثال:
        "assets/logo.png"

        إذا تركته فارغًا لن يظهر الشعار.
    */
    logoUrl: "assets/logo.png"

};


/* =========================================================
   2. FORM ELEMENTS
========================================================= */

const form = document.getElementById("requestForm");

const fullnameInput =
    document.getElementById("fullname");

const phoneInput =
    document.getElementById("phone");

const emailInput =
    document.getElementById("email");

const serviceInput =
    document.getElementById("service");

const messageInput =
    document.getElementById("message");

const termsInput =
    document.getElementById("terms");

const messageCounter =
    document.getElementById("messageCounter");

const submitBtn =
    document.getElementById("submitBtn");

const submitText =
    document.getElementById("submitText");

const successScreen =
    document.getElementById("successScreen");

const successRequestId =
    document.getElementById("successRequestId");

const sendWhatsAppBtn =
    document.getElementById("sendWhatsAppBtn");

const sendWhatsAppText =
    document.getElementById("sendWhatsAppText");

const newRequestBtn =
    document.getElementById("newRequestBtn");

const loadingSpinner =
    document.getElementById("loadingSpinner");

const dateInput =
    document.getElementById("date");

const attachmentInput =
    document.getElementById("attachment");

const attachmentPreview =
    document.getElementById("attachmentPreview");

const attachmentPreviewImage =
    document.getElementById("attachmentPreviewImage");

const attachmentName =
    document.getElementById("attachmentName");

const removeAttachment =
    document.getElementById("removeAttachment");

const attachmentError =
    document.getElementById("attachmentError");

const formLogo =
    document.getElementById("formLogo");

const formLogoImage =
    document.getElementById("formLogoImage");

const successLogo =
    document.getElementById("successLogo");

const successLogoImage =
    document.getElementById("successLogoImage");    

/* =========================================================
   3. LANGUAGE DATA
========================================================= */

const translations = {

    en: {

        formTitle:
            "Request a Service",

        formDescription:
            "Fill in the form below and send your request directly through WhatsApp.",

        fullnameLabel:
            "Full Name",

        fullnamePlaceholder:
            "Enter your full name",

        phoneLabel:
            "Phone Number",

        phonePlaceholder:
            "Enter your phone number",

        emailLabel:
            "Email Address",

        emailPlaceholder:
            "example@email.com",

        serviceLabel:
            "Service",

        servicePlaceholder:
            "Select a service",

        serviceWebsiteDesign:
            "Website Design",

        serviceLandingPage:
            "Landing Page",

        serviceHTMLForm:
            "HTML Form",

        serviceWebsiteFix:
            "Website Fix",

        dateLabel:
            "Preferred Date",

        contactMethodLabel:
            "Preferred Contact Method",

        contactWhatsApp:
            "WhatsApp",

        contactPhone:
            "Phone",

        attachmentLabel:
            "Attach an Image",

        attachmentButton:
            "Choose Image",

        attachmentHint:
            "Optional · JPG, PNG or WEBP · Max 5 MB",

        removeImage:
            "Remove",    

        messageLabel:
            "Message",

        messagePlaceholder:
            "Tell us what you need...",

        termsText:
            "I confirm that the information provided is correct.",

        submitButton:
            "Send Request via WhatsApp",
            
        successBadge:
            "Request Ready",

        successTitle:
            "Your request is ready",

        successDescription:
            "Your request has been prepared successfully. Send it to us through WhatsApp to continue.",

        requestIdLabel:
            "Request ID",

        sendWhatsApp:
            "Send via WhatsApp",

        share: 
            "Share",    

        newRequest:
            "Start New Request",    

        errors: {

            fullnameRequired:
                "Please enter your full name.",

            fullnameInvalid:
                "Please enter a valid name.",

            phoneRequired:
                "Please enter your phone number.",

            phoneInvalid:
                "Please enter a valid phone number.",

            emailInvalid:
                "Please enter a valid email address.",

            serviceRequired:
                "Please select a service.",
            
            imageInvalid:
                "Please select a valid image.",

            imageTooLarge:
                "Image size cannot exceed 5 MB.",    

            messageTooLong:
                "Message cannot exceed 500 characters.",

            termsRequired:
                "Please confirm that the information is correct."

        }

    },


    ar: {

        formTitle:
            "طلب خدمة",

        formDescription:
            "املأ النموذج أدناه وأرسل طلبك مباشرة عبر WhatsApp.",

        fullnameLabel:
            "الاسم الكامل",

        fullnamePlaceholder:
            "أدخل اسمك الكامل",

        phoneLabel:
            "رقم الهاتف",

        phonePlaceholder:
            "أدخل رقم الهاتف",

        emailLabel:
            "البريد الإلكتروني",

        emailPlaceholder:
            "example@email.com",

        serviceLabel:
            "الخدمة",

        servicePlaceholder:
            "اختر الخدمة",

        serviceWebsiteDesign:
            "تصميم موقع",

        serviceLandingPage:
            "صفحة هبوط",

        serviceHTMLForm:
            "نموذج HTML",

        serviceWebsiteFix:
            "إصلاح موقع",

        dateLabel:
            "التاريخ المفضل",

        contactMethodLabel:
            "طريقة التواصل المفضلة",

        contactWhatsApp:
            "WhatsApp",

        contactPhone:
            "الهاتف",

        attachmentLabel:
            "إرفاق صورة",

        attachmentButton:
            "اختيار صورة",

        attachmentHint:
            "اختياري · JPG أو PNG أو WEBP · الحد الأقصى 5 MB",

        removeImage:
            "حذف الصورة",    

        messageLabel:
            "الرسالة",

        messagePlaceholder:
            "اكتب تفاصيل طلبك...",

        termsText:
            "أؤكد أن المعلومات التي أدخلتها صحيحة.",

        submitButton:
            "إرسال الطلب عبر WhatsApp",

        successBadge:
            "تم تجهيز الطلب",

        successTitle:
            "طلبك جاهز",

        successDescription:
            "تم تجهيز طلبك بنجاح. أرسله إلينا عبر WhatsApp للمتابعة.",

        requestIdLabel:
            "رقم الطلب",

        sendWhatsApp:
            "إرسال عبر WhatsApp",

        share:
            "مشاركة",    

        newRequest:
            "بدء طلب جديد",
                
        errors: {

            fullnameRequired:
                "الرجاء إدخال الاسم الكامل.",

            fullnameInvalid:
                "الرجاء إدخال اسم صحيح.",

            phoneRequired:
                "الرجاء إدخال رقم الهاتف.",

            phoneInvalid:
                "الرجاء إدخال رقم هاتف صحيح.",

            emailInvalid:
                "الرجاء إدخال بريد إلكتروني صحيح.",

            serviceRequired:
                "الرجاء اختيار الخدمة.",

            imageInvalid:
                "الرجاء اختيار صورة صحيحة.",

            imageTooLarge:
                "حجم الصورة يجب ألا يتجاوز 5 MB.",    
            
            messageTooLong:
                "لا يمكن أن تتجاوز الرسالة 500 حرف.",

            termsRequired:
                "الرجاء تأكيد صحة المعلومات."

        }

    }

};


/* =========================================================
   4. CURRENT LANGUAGE
========================================================= */

let currentLanguage =
    CONFIG.defaultLanguage;

let currentRequest = null;

let attachmentObjectURL = null;

/* =========================================================
   5. HELPER
========================================================= */

function getTranslation(key) {

    return translations[currentLanguage][key];

}


/* =========================================================
   ACTION BUTTON LABELS
========================================================= */

function updateActionButtonLabels() {

    const hasAttachment =
        !!attachmentInput.files[0];

    const labelKey =
        hasAttachment
            ? "share"
            : "sendWhatsApp";


    /*
        Main form button
    */

    if (!submitBtn.classList.contains("loading")) {

        submitText.textContent =
            translations[currentLanguage][labelKey];

    }


    /*
        Success screen button
    */

    if (currentRequest) {

        sendWhatsAppText.textContent =
            translations[currentLanguage][labelKey];

    }

}

/* =========================================================
   6. FIELD STATE
========================================================= */

function setFieldState(
    input,
    statusId,
    errorId,
    valid,
    errorMessage = ""
) {

    const wrapper =
        input.closest(".input-wrapper");

    const status =
        document.getElementById(statusId);

    const error =
        document.getElementById(errorId);


    if (wrapper) {

        wrapper.classList.remove(
            "valid",
            "invalid"
        );

        if (input.value.trim() !== "") {

            wrapper.classList.add(
                valid ? "valid" : "invalid"
            );

        }

    }


    if (status) {

        status.textContent = "";

    }


    if (error) {

        error.textContent =
            valid ? "" : errorMessage;

    }

}


/* =========================================================
   7. NAME VALIDATION
========================================================= */

function validateFullname() {

    const value =
        fullnameInput.value.trim();


    if (!value) {

        setFieldState(
            fullnameInput,
            "fullnameStatus",
            "fullnameError",
            false,
            getTranslation("errors").fullnameRequired
        );

        return false;
    }


    const namePattern =
        /^[\p{L}][\p{L}\s'-]{2,}$/u;


    if (!namePattern.test(value)) {

        setFieldState(
            fullnameInput,
            "fullnameStatus",
            "fullnameError",
            false,
            getTranslation("errors").fullnameInvalid
        );

        return false;
    }


    setFieldState(
        fullnameInput,
        "fullnameStatus",
        "fullnameError",
        true
    );

    return true;

}


/* =========================================================
   8. PHONE VALIDATION
========================================================= */

function validatePhone() {

    const value =
        phoneInput.value.trim();


    if (!value) {

        setFieldState(
            phoneInput,
            "phoneStatus",
            "phoneError",
            false,
            getTranslation("errors").phoneRequired
        );

        return false;
    }


    /*
        يسمح بالأرقام فقط.
        من 8 إلى 15 رقمًا.
    */

    const phonePattern =
        /^[0-9]{8,15}$/;


    if (!phonePattern.test(value)) {

        setFieldState(
            phoneInput,
            "phoneStatus",
            "phoneError",
            false,
            getTranslation("errors").phoneInvalid
        );

        return false;
    }


    setFieldState(
        phoneInput,
        "phoneStatus",
        "phoneError",
        true
    );

    return true;

}


/* =========================================================
   9. EMAIL VALIDATION
========================================================= */

function validateEmail() {

    const value =
        emailInput.value.trim();


    /*
        البريد اختياري.
        إذا كان فارغًا يعتبر صحيحًا.
    */

    if (!value) {

        setFieldState(
            emailInput,
            "emailStatus",
            "emailError",
            true
        );

        return true;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(value)) {

        setFieldState(
            emailInput,
            "emailStatus",
            "emailError",
            false,
            getTranslation("errors").emailInvalid
        );

        return false;
    }


    setFieldState(
        emailInput,
        "emailStatus",
        "emailError",
        true
    );

    return true;

}


/* =========================================================
   10. SERVICE VALIDATION
========================================================= */

function validateService() {

    const error =
        document.getElementById("serviceError");

    const status =
        document.getElementById("serviceStatus");

    const wrapper =
        serviceInput.closest(".input-wrapper");


    if (!serviceInput.value) {

        error.textContent =
            getTranslation("errors").serviceRequired;

        serviceInput.classList.add(
            "input-error"
        );

        if (wrapper) {
            wrapper.classList.remove("valid");
            wrapper.classList.add("invalid");
        }

        if (status) {
            status.textContent = "";
        }

        return false;
    }


    error.textContent = "";

    serviceInput.classList.remove(
        "input-error"
    );

    if (wrapper) {
        wrapper.classList.remove("invalid");
        wrapper.classList.add("valid");
    }

    return true;

}

/* =========================================================
   11. TERMS VALIDATION
========================================================= */

function validateTerms() {

    const error =
        document.getElementById("termsError");

    const status =
        document.getElementById("termsStatus");


    if (!termsInput.checked) {

        error.textContent =
            getTranslation("errors").termsRequired;

        if (status) {
            status.textContent = "";
        }

        return false;
    }


    error.textContent = "";

    if (status) {
        status.textContent = "✓";
    }

    return true;

}



function validateAttachment() {

    const file =
        attachmentInput.files[0];


    if (!file) {

        attachmentError.textContent = "";

        return true;

    }


    if (!file.type.startsWith("image/")) {

        attachmentError.textContent =
            getTranslation("errors").imageInvalid;

        return false;

    }


    const maxSize =
        CONFIG.maxImageSizeMB * 1024 * 1024;


    if (file.size > maxSize) {

        attachmentError.textContent =
            getTranslation("errors").imageTooLarge;

        return false;

    }


    attachmentError.textContent = "";

    return true;

}


function showAttachmentPreview(file) {

    if (!file) {
        return;
    }


    if (attachmentObjectURL) {

        URL.revokeObjectURL(
            attachmentObjectURL
        );

    }


    attachmentObjectURL =
        URL.createObjectURL(file);


    attachmentPreviewImage.src =
        attachmentObjectURL;

    attachmentName.textContent =
        file.name;

    attachmentPreview.hidden =
        false;

}


function clearAttachment() {

    attachmentInput.value = "";

    attachmentPreviewImage.src = "";

    attachmentName.textContent = "";

    attachmentPreview.hidden = true;

    attachmentError.textContent = "";

    if (attachmentObjectURL) {

        URL.revokeObjectURL(
            attachmentObjectURL
        );

        attachmentObjectURL = null;

    }

    updateActionButtonLabels();

}

/* =========================================================
   12. MESSAGE COUNTER
========================================================= */

function updateMessageCounter() {

    const length =
        messageInput.value.length;


    const max =
        CONFIG.maxMessageLength;


    messageCounter.textContent =
        `${length} / ${max}`;


    messageCounter.classList.remove(
        "near-limit",
        "limit-reached"
    );


    if (length >= max) {

        messageCounter.classList.add(
            "limit-reached"
        );

    }
    else if (length >= max * 0.8) {

        messageCounter.classList.add(
            "near-limit"
        );

    }

}


/* =========================================================
   13. PHONE INPUT CONTROL
========================================================= */

phoneInput.addEventListener(
    "input",
    function () {

        this.value =
            this.value.replace(/\D/g, "");

        validatePhone();

    }
);


/* =========================================================
   14. LIVE VALIDATION
========================================================= */

fullnameInput.addEventListener(
    "input",
    validateFullname
);

fullnameInput.addEventListener(
    "blur",
    validateFullname
);


emailInput.addEventListener(
    "input",
    validateEmail
);

emailInput.addEventListener(
    "blur",
    validateEmail
);


serviceInput.addEventListener(
    "change",
    validateService
);


attachmentInput.addEventListener(
    "change",
    function () {

        const file =
            this.files[0];


        if (!file) {

            clearAttachment();

            return;

        }


        if (!validateAttachment()) {

            clearAttachment();

            return;

        }


        showAttachmentPreview(file);

        updateActionButtonLabels();

    }
);

removeAttachment.addEventListener(
    "click",
    clearAttachment
);


termsInput.addEventListener(
    "change",
    validateTerms
);


messageInput.addEventListener(
    "input",
    updateMessageCounter
);


/* =========================================================
   15. REQUEST ID
========================================================= */

function generateRequestId() {

    const date =
        new Date();


    const year =
        date.getFullYear();


    const month =
        String(date.getMonth() + 1)
            .padStart(2, "0");


    const day =
        String(date.getDate())
            .padStart(2, "0");


    const random =
        Math.floor(
            1000 + Math.random() * 9000
        );


    return `NS-${year}${month}${day}-${random}`;

}


/* =========================================================
   16. WHATSAPP MESSAGE
========================================================= */

function buildWhatsAppMessage(data) {

    const isArabic =
        currentLanguage === "ar";


    if (isArabic) {

        return `*طلب خدمة جديد*

🏢 *${CONFIG.companyName}*

━━━━━━━━━━━━━━

🔢 *رقم الطلب:*
${data.requestId}

👤 *اسم العميل:*
${data.fullname}

📱 *رقم الهاتف:*
${data.phone}

📧 *البريد الإلكتروني:*
${data.email || "غير متوفر"}

💼 *الخدمة المطلوبة:*
${data.service}

📅 *التاريخ المفضل:*
${data.date || "غير محدد"}

📞 *طريقة التواصل:*
${data.contact}

📝 *تفاصيل الطلب:*
${data.message || "لا توجد تفاصيل إضافية"}

━━━━━━━━━━━━━━

تم إرسال الطلب عبر نموذج ${CONFIG.companyName}`;

    }


    return `*New Service Request*

🏢 *${CONFIG.companyName}*

━━━━━━━━━━━━━━

🔢 *Request ID:*
${data.requestId}

👤 *Customer:*
${data.fullname}

📱 *Phone:*
${data.phone}

📧 *Email:*
${data.email || "Not provided"}

💼 *Service:*
${data.service}

📅 *Preferred Date:*
${data.date || "Not specified"}

📞 *Contact Method:*
${data.contact}

📝 *Message:*
${data.message || "No message provided"}

━━━━━━━━━━━━━━

Submitted through ${CONFIG.companyName}`;

}


/* =========================================================
   17. SUBMIT
========================================================= */

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* =================================================
           VALIDATION
        ================================================= */

        const fullnameValid =
            validateFullname();

        const phoneValid =
            validatePhone();

        const emailValid =
            validateEmail();

        const serviceValid =
            validateService();

        const termsValid =
            validateTerms();
        
        const attachmentValid =
            validateAttachment();    


        if (
            !fullnameValid ||
            !phoneValid ||
            !emailValid ||
            !serviceValid ||
            !termsValid ||
            !attachmentValid
        ) {

            return;

        }


        /* =================================================
           PREVENT DOUBLE SUBMISSION
        ================================================= */

        if (submitBtn.disabled) {

            return;

        }


        /* =================================================
           LOADING STATE
        ================================================= */

        submitBtn.disabled = true;

        submitBtn.classList.add(
            "loading"
        );

        submitText.textContent =
            currentLanguage === "ar"
                ? "جاري تجهيز الطلب..."
                : "Preparing request...";


        loadingSpinner.hidden = false;


        /* =================================================
           COLLECT DATA
        ================================================= */

        const contactElement =
            document.querySelector(
                'input[name="contact"]:checked'
            );


        currentRequest = {

            requestId:
                generateRequestId(),

            fullname:
                fullnameInput.value.trim(),

            phone:
                phoneInput.value.trim(),

            email:
                emailInput.value.trim(),

            service:
                serviceInput.value,

            date:
                document.getElementById("date").value,

            contact:
                contactElement
                    ? contactElement.value
                    : "WhatsApp",

            message:
                messageInput.value.trim(),
            
            attachment:
                attachmentInput.files[0] || null    

        };


        /* =================================================
           BUILD WHATSAPP MESSAGE
        ================================================= */

        currentRequest.whatsappMessage =
            buildWhatsAppMessage(
                currentRequest
            );


        currentRequest.whatsappURL =
            `https://wa.me/${CONFIG.whatsappNumber}` +
            `?text=${encodeURIComponent(
                currentRequest.whatsappMessage
            )}`;


        /* =================================================
           SHOW SUCCESS SCREEN
        ================================================= */

        setTimeout(
            function () {

                form.hidden = true;

                successScreen.hidden = false;

                successScreen.classList.add(
                    "success-visible"
                );


                successRequestId.textContent =
                    currentRequest.requestId;

                updateActionButtonLabels();    

                submitBtn.disabled = false;

                submitBtn.classList.remove(
                    "loading"
                );

                loadingSpinner.hidden = true;

            },
            900
        );

    }
);


async function getLogoFile() {

    if (!CONFIG.logoUrl) {
        return null;
    }


    try {

        const response =
            await fetch(CONFIG.logoUrl);


        if (!response.ok) {
            return null;
        }


        const blob =
            await response.blob();


        return new File(
            [blob],
            "company-logo",
            {
                type:
                    blob.type || "image/png"
            }
        );

    }
    catch (error) {

        return null;

    }

}

async function shareRequestFiles() {

    if (
        !currentRequest ||
        !currentRequest.attachment
    ) {

        return false;

    }

    const file =
        currentRequest.attachment;


    if (
        !navigator.share ||
        !navigator.canShare
    ) {

        return false;

    }


    if (
        !navigator.canShare({
            files: [file]
        })
    ) {

        return false;

    }


    await navigator.share({

        title:
            CONFIG.companyName,

        text:
            currentRequest.whatsappMessage,

        files: [
            file
        ]

    });


    return true;

}

sendWhatsAppBtn.addEventListener(
    "click",
    async function () {

        if (
            !currentRequest ||
            !currentRequest.whatsappURL
        ) {

            return;

        }


        sendWhatsAppBtn.disabled = true;

        sendWhatsAppBtn.classList.add(
            "sending"
        );


        const hasAttachment =
            !!currentRequest.attachment;


        /*
            =========================================
            تحديد نوع الجهاز
            =========================================

            إذا كان الجهاز كمبيوتر:
            لا نستخدم navigator.share()

            لأن ذلك يفتح نافذة Share الخاصة
            بالمتصفح بدل WhatsApp.
        */

        const isDesktop =
            window.matchMedia(
                "(hover: hover) and (pointer: fine)"
            ).matches;


        try {

            /*
                =========================================
                الحالة الأولى:
                لا توجد صورة
                =========================================
            */

            if (!hasAttachment) {

                sendWhatsAppText.textContent =
                    currentLanguage === "ar"
                        ? "جاري فتح WhatsApp..."
                        : "Opening WhatsApp...";


                window.open(
                    currentRequest.whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );


                return;

            }


            /*
                =========================================
                الحالة الثانية:
                توجد صورة + كمبيوتر
                =========================================

                لا نستخدم Web Share.

                أولًا نحاول نسخ الرسالة،
                ثم نفتح WhatsApp Web.

                المستخدم يستطيع بعد ذلك:
                Ctrl + V
                للصق الرسالة إذا احتاج.

                والصورة يتم إرفاقها يدويًا
                داخل WhatsApp Web.
            */

            if (isDesktop) {

                sendWhatsAppText.textContent =
                    currentLanguage === "ar"
                        ? "جاري تجهيز WhatsApp..."
                        : "Preparing WhatsApp...";


                /*
                    =========================================
                    نسخ رسالة الطلب
                    =========================================
                */

                try {

                    await navigator.clipboard.writeText(
                        currentRequest.whatsappMessage
                    );

                }
                catch (clipboardError) {

                    console.warn(
                        "Clipboard copy failed:",
                        clipboardError
                    );

                }


                /*
                    =========================================
                    فتح WhatsApp Web
                    =========================================
                */

                window.open(
                    currentRequest.whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );


                /*
                    =========================================
                    تنبيه إرفاق الصورة
                    =========================================
                */

                let attachmentNotice =
                    document.getElementById(
                        "desktopAttachmentNotice"
                    );


                if (!attachmentNotice) {

                    attachmentNotice =
                        document.createElement("div");

                    attachmentNotice.id =
                        "desktopAttachmentNotice";

                    attachmentNotice.className =
                        "desktop-attachment-notice";


                    sendWhatsAppBtn.insertAdjacentElement(
                        "afterend",
                        attachmentNotice
                    );

                }


                attachmentNotice.innerHTML =
                    currentLanguage === "ar"
                        ? `
                            <strong>📎 أرفق الصورة قبل الإرسال</strong>
                            <span>
                                تم فتح WhatsApp ونسخ رسالة الطلب.
                                يرجى إرفاق الصورة يدويًا في WhatsApp Web
                                ثم إرسال الرسالة.
                            </span>
                        `
                        : `
                            <strong>📎 Attach the image before sending</strong>
                            <span>
                                WhatsApp has been opened and your request message
                                was copied. Please attach the image manually
                                in WhatsApp Web, then send the message.
                            </span>
                        `;


                attachmentNotice.hidden = false;


                return;

            }

            /*
                =========================================
                الحالة الثالثة:
                توجد صورة + هاتف
                =========================================

                على الهاتف نستفيد من Web Share
                لأنه يستطيع تمرير الصورة إلى
                التطبيقات مثل WhatsApp.
            */

            sendWhatsAppText.textContent =
                currentLanguage === "ar"
                    ? "جاري تجهيز الصورة..."
                    : "Preparing image...";


            const shared =
                await shareRequestFiles();


            if (shared) {

                return;

            }


            /*
                =========================================
                Web Share غير مدعوم على الهاتف
                =========================================

                نفتح WhatsApp بالنص فقط.
            */

            sendWhatsAppText.textContent =
                currentLanguage === "ar"
                    ? "جاري فتح WhatsApp..."
                    : "Opening WhatsApp...";


            window.open(
                currentRequest.whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
        catch (error) {

            /*
                =========================================
                المستخدم أغلق Share
                =========================================
            */

            if (
                error &&
                error.name === "AbortError"
            ) {

                return;

            }


            /*
                =========================================
                أي خطأ آخر
                =========================================

                نفتح WhatsApp بالنص بدلًا من
                ترك المستخدم عالقًا.
            */

            sendWhatsAppText.textContent =
                currentLanguage === "ar"
                    ? "جاري فتح WhatsApp..."
                    : "Opening WhatsApp...";


            window.open(
                currentRequest.whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }

        finally {

            sendWhatsAppBtn.disabled =
                false;

            sendWhatsAppBtn.classList.remove(
                "sending"
            );

            updateActionButtonLabels();

        }

    }
);

newRequestBtn.addEventListener(
    "click",
    function () {

        currentRequest = null;

        form.reset();

        clearAttachment();

        /*
            Clear validation states
        */

        document
            .querySelectorAll(
                ".input-wrapper"
            )
            .forEach(
                function (wrapper) {

                    wrapper.classList.remove(
                        "valid",
                        "invalid"
                    );

                }
            );


        document
            .querySelectorAll(".error")
            .forEach(
                function (error) {

                    error.textContent = "";

                }
            );


        serviceInput.classList.remove(
            "input-error"
        );


        updateMessageCounter();


        successScreen.hidden = true;

        successScreen.classList.remove(
            "success-visible"
        );


        form.hidden = false;


        fullnameInput.focus();

    }
);


function initializeCompanyLogo() {

    if (!CONFIG.logoUrl) {
        return;
    }


    formLogoImage.src =
        CONFIG.logoUrl;

    successLogoImage.src =
        CONFIG.logoUrl;


    formLogoImage.onload =
        function () {

            formLogo.hidden = false;

        };


    successLogoImage.onload =
        function () {

            successLogo.hidden = false;

        };


    formLogoImage.onerror =
        function () {

            formLogo.hidden = true;

        };


    successLogoImage.onerror =
        function () {

            successLogo.hidden = true;

        };

}


/* =========================================================
   18. LANGUAGE SWITCHING
========================================================= */

function setLanguage(language) {

    if (!translations[language]) {

        return;

    }


    currentLanguage =
        language;


    document.documentElement.lang =
        language;


    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    /*
        Update normal text
    */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(
            function (element) {

                const key =
                    element.dataset.i18n;


                const translation =
                    translations[language][key];


                if (translation) {

                    element.textContent =
                        translation;

                }

            }
        );


    /*
        Update placeholders
    */

    document
        .querySelectorAll("[data-placeholder]")
        .forEach(
            function (element) {

                const key =
                    element.dataset.placeholder;


                const translation =
                    translations[language][key];


                if (translation) {

                    element.placeholder =
                        translation;

                }

            }

        );
       

    /*
        Update language buttons
    */

    document
        .querySelectorAll(".language-btn")
        .forEach(
            function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.lang === language
                );

            }
        );


    /*
        Re-run visible validation
        so messages change language.
    */

    if (fullnameInput.value.trim()) {

        validateFullname();

    }

    if (phoneInput.value.trim()) {

        validatePhone();

    }

    if (emailInput.value.trim()) {

        validateEmail();

    }

    if (serviceInput.value) {

        validateService();

    }

    if (termsInput.checked) {

        validateTerms();

    }

    updateActionButtonLabels();

}


/* =========================================================
   19. LANGUAGE BUTTONS
========================================================= */

document
    .querySelectorAll(".language-btn")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    setLanguage(
                        this.dataset.lang
                    );

                }
            );

        }
    );


/* =========================================================
   20. INITIALIZE
========================================================= */

initializeCompanyLogo();

updateMessageCounter();

setLanguage(
    CONFIG.defaultLanguage
);