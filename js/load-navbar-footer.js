// Functie dat meteen wordt uigevoerd
(function ($) {
    "use strict";

    // Functie renderNavbar die html elementen van de navbar terug geeft
    function renderNavbar() {
        return `
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img class="logo" src="assets/images/logo.png" alt="Smart City Logo"/>
                    Neona
                </a>
    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="topic.html">Topic</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link click-scroll" href="diensten.html">Diensten</a>
                            <div class="dropdown-content">
                              <a href="mobiliteit.html">Mobiliteit</a>
                              <a href="milieu.html">Milieu</a>
                              <a href="verkeer.html">Verkeer</a>
                              <a href="energie.html">Energie</a>
                              <a href="veiligheid.html">Veiligheid</a>
                              <a href="afval.html">Afval</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    }

    // Functie renderFooter die html elementen van de footer terug geeft
    function renderFooter() {
        return `
            <footer class="site-footer">
            <div class="site-footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <h2 class="text-white mb-lg-0">Neona</h2>
                        </div>
                        <div class="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                            <ul class="social-icon d-flex justify-content-lg-end">
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link">
                                        <span class="bi-twitter"></span>
                                    </a>
                                </li>
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link">
                                        <span class="bi-instagram"></span>
                                    </a>
                                </li>
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link">
                                        <span class="bi-youtube"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 mb-4 pb-2">
                        <h5 class="site-footer-title mb-3">Links</h5>
                        <ul class="site-footer-links">
                            <li class="site-footer-link-item">
                                <a href="index.html" class="site-footer-link">Home</a>
                            </li>
    
                            <li class="site-footer-link-item">
                                <a href="topic.html" class="site-footer-link">Topic</a>
                            </li>
    
                            <li class="site-footer-link-item">
                                <a href="diensten.html" class="site-footer-link">Diensten</a>
                            </li>
    
                            <li class="site-footer-link-item">
                                <a href="contact.html" class="site-footer-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <h5 class="site-footer-title mb-3">Graduaat IoT D1</h5>
                        <p class="text-white d-flex mb-1">
                            <a href="tel: 0486568296" class="site-footer-link">
                                Emilio Pepa
                            </a>
                        </p>
                        <p class="text-white d-flex">
                            <a href="mailto:Emilio_ka1@hotmail.com" class="site-footer-link">
                                
                            </a>
                        </p>
                    </div>
    
                    <div class="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
                        <h5 class="site-footer-title mb-3">Location</h5>
                        <p class="text-white d-flex mt-3 mb-2">
                            Ellermanstraat 33 Antwerpen, Antwerpen, Belgie</p>
                    </div>
                </div>
            </div>
    
            <div class="site-footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-12 mt-lg-5">
                            <ul class="site-footer-links">
                                <li class="site-footer-link-item">
                                    <a href="#" class="site-footer-link">Terms &amp; Conditions</a>
                                </li>
                                <li class="site-footer-link-item">
                                    <a href="#" class="site-footer-link">Privacy Policy</a>
                                </li>
                                <li class="site-footer-link-item">
                                    <a href="#" class="site-footer-link">Your Feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    }

    // Controleer of element met Id 'navbar' bestaat, zo ja, genereer de html daarin met de functie 'renderNavbar'
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = renderNavbar();
    }

    // Controleer of element met Id 'footer' bestaat, zo ja, genereer de html daarin met de functie 'renderFooter'
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = renderFooter();
    }
})(window.jQuery);