import React from 'react'

export default function Footer() {
    return (
        <footer class="footer-basic">
        <div class="social"><a href="/"><i class="icon ion-social-instagram"></i></a><a href="/"><i class="icon ion-social-snapchat"></i></a><a href="/"><i class="icon ion-social-twitter"></i></a><a href="/"><i className="icon ion-social-facebook"></i></a></div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="/">Home</a></li>
            <li class="list-inline-item"><a href="/">Services</a></li>
            <li class="list-inline-item"><a href="/">About</a></li>
            <li class="list-inline-item"><a href="/">Terms</a></li>
            <li class="list-inline-item"><a href="/">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Company Name © 2021</p>
        </footer>
    )
}
