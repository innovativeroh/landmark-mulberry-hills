import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TitanPipe - Webflow Ecommerce website template",
  description: "TitanPipe is a professional Webflow Ecommerce template for roofing and construction businesses to showcase services, projects, and generate leads today.",
  openGraph: {
    title: "TitanPipe - Webflow Ecommerce website template",
    description: "TitanPipe is a professional Webflow Ecommerce template for roofing and construction businesses to showcase services, projects, and generate leads today.",
    images: [
      {
        url: "/images/696a502b5959735a04b66728_a31d9da5d5b4a67dab52fce97d71cb07_Social-share.jpg",
      }
    ],
    type: "website",
  },
  twitter: {
    title: "TitanPipe - Webflow Ecommerce website template",
    description: "TitanPipe is a professional Webflow Ecommerce template for roofing and construction businesses to showcase services, projects, and generate leads today.",
    images: ["/images/696a502b5959735a04b66728_a31d9da5d5b4a67dab52fce97d71cb07_Social-share.jpg"],
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/69615623ad805642c1d79e03_Fav Icon.svg",
    apple: "/images/69e3319b71897fde63bd1ae9_Web Clip (1).png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="titanpipe-template.webflow.io"
      data-wf-page="695a39548a779b2bfa0d5dd1"
      data-wf-site="695a39548a779b2bfa0d5de4"
      suppressHydrationWarning
    >
      <head>
        <link href="https://cdn.prod.website-files.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        
        <style suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `html.w-mod-js:not(.w-mod-ix3) :is([animation="word"], .hero-container) {visibility: hidden !important;}`
        }} />
        
        <script src="/js/webfont.js" type="text/javascript" />
        <script dangerouslySetInnerHTML={{
          __html: `WebFont.load({ google: { families: ["Inter Tight:300,400,500,600,700"] } });`
        }} />

        <script dangerouslySetInnerHTML={{
          __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`
        }} />

        <script dangerouslySetInnerHTML={{
          __html: `(function(w,i,g){w[g]=w[g]||[];if(typeof w[g].push=='function')w[g].push.apply(w[g],Array.isArray(i)?i:[i]);})(window,['G-3LRMNFP7L5'],'google_tags_first_party');`
        }} />
        <script async src="/js/rNGRKzO6-t7IhZlEO5e0MYu9-Zc.js" />
        
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('set', 'developer_id.dZGVlNj', true);gtag('set', 'developer_id.dYWYxNW', true);gtag('js', new Date());gtag('config', 'G-3LRMNFP7L5');`
        }} />

        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plwebflow';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1164421445117662');fbq('track', 'PageView');`
        }} />

        <script dangerouslySetInnerHTML={{
          __html: `window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}","hideDecimalForWholeNumbers":false};`
        }} />
      </head>
      <body>
        {children}
        
        <script src="/js/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript" crossOrigin="anonymous" />
        <script src="/js/titanpipe-template.schunk.172ec51a511480e2.js" type="text/javascript" crossOrigin="anonymous" />
        <script src="/js/titanpipe-template.schunk.cc8c2469fb897bef.js" type="text/javascript" crossOrigin="anonymous" />
        <script src="/js/titanpipe-template.ab601168.d4867a12b8b249fc.js" type="text/javascript" crossOrigin="anonymous" />
        <script src="/js/gsap.min.js" type="text/javascript" />
      </body>
    </html>
  );
}
