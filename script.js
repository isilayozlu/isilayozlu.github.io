let links = document.querySelectorAll(".nav-links");

window.onload = function() {
    hideAllSections();
    showAbout();  // Sayfa ilk yüklendiğinde "About" bölümünü göster
};

function hideAllSections() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('portfolio').style.display = 'none';
    // Bağlantılara varsayılan renk geri verilmesi
    links.forEach(link => {
        link.style.color = "";  // Varsayılan renk (CSS'deki renk)
    });
}

function showAbout() {
    hideAllSections();
    document.getElementById('about').style.display = 'block';
    setActiveLink(links[0]); // About linkini aktif yap
}

function showResume() {
    hideAllSections();
    document.getElementById('resume').style.display = 'block';
    setActiveLink(links[1]); // Resume linkini aktif yap
}

function showBlog() {
    hideAllSections();
    document.getElementById('blog').style.display = 'block';
    setActiveLink(links[3]); // Blog linkini aktif yap
}

function showPortfolio() {
    hideAllSections();
    document.getElementById('portfolio').style.display = 'block';
    setActiveLink(links[2]); // Portfolio linkini aktif yap
}

function setActiveLink(activeLink) {
    links.forEach(link => {
        link.style.color = "";  // Tüm linklerin rengini sıfırla
    });
    activeLink.style.color = "#f5c518";  // Aktif linkin rengini değiştir
}



// Bu fonksiyon, her kart için farklı içeriği gösterecek
function enterCard(cardNumber) {
    // Portföy kısmını gizle
    document.getElementById("portfolio").style.display = "none";
    // Detay kısmını göster
    document.getElementById("cardDetail").classList.add("show");

    // İçeriği güncelle
    let content = "";
    
    // Kart numarasına göre içerik ayarla
    if (cardNumber === 1) {
        content = `
            <h1>Blog Tasarımım</h1>
            <img class="card-image" src="resimler/blog-1.png" alt="blog">
            <br>
            <h2>Neden Bu Projeyi Yaptım?</h2>
            <p>Bu blog tasarımı, temel HTML ve CSS kullanarak yapılmıştır. Projeyi oluştururken, temel web tasarımı becerilerimi geliştirmeyi ve basit bir blog sayfası oluşturmayı hedefledim. Blog tasarımında kullanılan renkler, fontlar ve düzenleme, ziyaretçilerin gözünde sade ve şık bir görüntü oluşturmayı amaçladı.</p>
        `;
    } else if (cardNumber === 2) {
        content = `
            <h1>Kişisel Portföy Web Sitesi</h1>
            <img class="card-image" src="resimler/portfolio.png" alt="portfolio">
            <p>Bu projede, yalnızca HTML ve CSS kullanarak basit bir portföy web sitesi örneği geliştirdim. Ana hedefim, temel web geliştirme becerilerimi pekiştirmek, HTML yapısı ve CSS düzenlemeleri konusunda pratik yaparak kendimi geliştirmekti. Eğitim amaçlı hazırladığım bu çalışma, frontend alanındaki öğrenme sürecimin bir parçasıdır.</p>
            <br>
            <h2>Tasarım Özellikleri:</h2>
            <ul>
                <li><strong>Basit ve Modern Tasarım:</strong> Site, sade ve modern bir görünümle şık bir şekilde düzenlendi. Renk paletini seçerken, profesyonel bir izlenim bırakacak ve kullanıcının gözünü yormayacak tonlar tercih ettim.</li>
                <br>
                <li><strong>Navigasyon Menüsü: </strong>Kolay erişim için başlıklar arasında gezinmeyi sağlayan bir menü tasarlandı. Menüdeki geçişler kullanıcı deneyimini artırmak için yumuşak animasyonlarla desteklendi.</li>
                <br>
                <li><strong>Projeler Bölümü:</strong> Projelerimi daha etkili bir şekilde tanıtabilmek için görsel içerikler ve açıklamalarla desteklenmiş bir proje bölümü eklendi.</li>
                <br>
                <li><strong>İletişim Formu:</strong>Kullanıcıların benimle iletişime geçebilmeleri için basit ve etkili bir iletişim formu eklendi. Bu form, ziyaretçilerin adlarını, e-posta adreslerini ve mesajlarını girebilecekleri alanlar içeriyor.</li>
            </ul>
            <br><br>
            <h2>Neden Bu Projeyi Yaptım?</h2>
            <p>Bu projeyi yapmak, web tasarımı becerilerimi geliştirmemi sağladı. HTML ve CSS kullanarak temel sayfa yapısı oluşturmayı öğrenirken, aynı zamanda görsel tasarım konusunda da bilgi kazandım. Portföyü oluştururken, sadece teknik bilgi değil, aynı zamanda kullanıcı dostu bir deneyim oluşturmayı da amaçladım.</p>
        `;
    } else if (cardNumber === 3) {
        content = `
            <h1>GSB Wi-Fi Web Tasarımı (Taklit Proje)</h1>
            <img class="card-image" src="resimler/gsb.png" alt="resume">
            <p>Bu proje, GSB WiFi sitesini taklit etmek amacıyla tasarladığım bir web sitesidir. Bu projeyi, HTML ve CSS kullanarak oluşturmayı hedefledim. Amacım, gerçek bir web sitesinin tasarımını anlayarak, kullanıcı arayüzü ve görsel öğeleri doğru bir şekilde yerleştirme becerimi geliştirmekti.</p>
            <br>
            <h2>Kullanılan Teknolojiler:</h2>
            <ul>
                <li><strong>HTML5:</strong>Sayfanın temel yapısını oluşturmak için HTML kullanarak uygun etiketler ve semantik yapı oluşturuldu</li>
                <br>
                <li><strong>CSS3: </strong> Sayfanın görsel tasarımı için CSS ile stil verildi. Renkler, fontlar, düzen ve geçişler tasarımı şekillendiren önemli öğeler oldu.</li>
               </ul>
            <br>
            <h2>Neden Bu Projeyi Yaptım?</h2>
            <p>GSB WiFi sitesinin tasarımını taklit ederek HTML ve CSS becerilerimi pekiştirmek istedim. Gerçek bir siteyi taklit etmek, tasarım anlayışımı geliştirirken, aynı zamanda web tasarımındaki temel ilkeleri daha iyi anlamamı sağladı./p>
        `;
    } else if (cardNumber === 4) {
        content = `
            <h1>Responsive Web Sitesi</h1>
            <img class="card-image" src="resimler/responsive-1.png" alt="about">
            <br>
            <p>Bu proje, responsive tasarım kullanarak geliştirdiğim bir web sitesidir. Amacım, farklı cihazlarda düzgün görüntülenen bir site tasarımı yapmaktı. HTML ve CSS kullanarak baştan sona her sayfa elemanını tasarladım ve siteyi mobil uyumlu hale getirdim.</p>
            <br>
            <img class="card-image" src="resimler/responsive-2.png" alt="about">
             <br>
            <h2>Kullanılan Teknolojiler:</h2>
            <ul>
                <li><strong>HTML5:</strong>Sayfanın temel yapısını oluşturmak için HTML kullanıldı.</li>
                <li><strong>CSS3: </strong>Sayfanın stilini oluşturmak için CSS ile renkler, yazı tipleri, düzen ve diğer görsel öğeler ayarlandı. Özellikle flexbox ve media queries kullanarak sitenin farklı ekran boyutlarında düzgün görünmesini sağladım.</li>
               </ul>
               <br>
            <img class="card-image" src="resimler/responsive-3.png" alt="about">

            <h2>Tasarım Özellikleri:</h2>
            <ul>
                <li><strong>Responsive Tasarım:</strong>Farklı ekran boyutlarına uyum sağlayacak şekilde tasarlandı. Mobil, tablet ve masaüstü cihazlarda iyi bir kullanıcı deneyimi sunmak için media queries kullanıldı.</li>
                <br>
                <li><strong>Modern Görsel Öğeler: </strong>Görsel tasarımı şık ve profesyonel hale getirmek için büyük arka plan görselleri, kutu stilizasyonları ve hover efektleri kullanıldı.</li>
                <br>
                <li><strong>Kullanıcı Dostu Arayüz: </strong>Tüm sayfa bölümleri merkezde konumlandırılmış, yazılar okunabilir ve görseller düzgün bir şekilde hizalanmıştır. </li>
            </ul>
            <br>
            <img class="card-image" src="resimler/responsive-4.png" alt="about">
           
             <h2>Neden Bu Projeyi Yaptım?</h2>
            <p>Bu projeyi, kullanıcı deneyimini ön planda tutarak responsive tasarım becerilerimi geliştirmek için gerçekleştirdim. Farklı cihazlarda ve ekran boyutlarında test ederek, modern web tasarım ilkelerini uygulamaya çalıştım.</p>
        `;
    }else if (cardNumber === 5) {
        content = `
            <h1>Freelancer Portföyü Tanıtımı</h1>
            <img class="card-image" src="resimler/freelencer-1.png" alt="about">
            <br>
            <p>Bu projede modern bir kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) odaklı, tamamen responsive bir web tasarımı geliştirdim. HTML5 ve CSS3 teknolojilerini kullanarak oluşturduğum bu statik web sitesi, tüm cihazlarda ve ekran boyutlarında mükemmel şekilde çalışacak şekilde optimize edilmiştir.</p>
            <br>
            <img class="card-image" src="resimler/freelencer-2.png" alt="about">
             <br>
            <h2>Teknolojiler ve Araçlar:</h2>
            <ul>
                <li>HTML5 ve CSS3 ile şık ve hızlı bir kullanıcı arayüzü oluşturuldu.</li>
                <br>
                <li>Responsive Web Design sayesinde farklı cihazlarda uyumlu tasarım.</li>
                <br>
                <li>Font Awesome ile zengin simge ve ikon kullanımı, web sitesine profesyonel bir hava katmıştır.</li>
                <br>
                <li>JavaScript ile etkileşimli ve dinamik menü özellikleri sağlanmıştır.</li>
                </ul>
               <br>
            <img class="card-image" src="resimler/freelencer-3.png" alt="about">

            <h2>Tasarım Özellikleri:</h2>
            <ul>
                <li><strong>Duyarlı Tasarım (Responsive Design): </strong>Mobil, tablet ve masaüstü uyumlu.</li>
                <br>
                <li><strong>Şık Görseller ve Hover Efektleri: </strong>Görsel olarak dikkat çekici ve etkileşimli tasarım.</li>
                <br>
                <li><strong>Modern Navigasyon: </strong>Mobil uyumlu, açılıp kapanabilen menü.</li>
                
            <br>
            <img class="card-image" src="resimler/freelencer-4.png" alt="about">
            <br><br>
                <li><strong>İletişim Formu:</strong> Kullanıcıların kolayca ulaşabileceği sade bir form yer alıyor.</li>
            <br>
            
            <img class="card-image" src="resimler/freelencer-6.png" alt="about">
            <br><br>
            <li><strong>JavaScript Kullanımı: </strong>Menü butonuna tıklanarak menünün açılıp kapanması sağlanmıştır.</li>
            <br>
            <img class="card-image" src="resimler/freelencer-7.png" alt="about">
            </ul>
             <h2>Neden Bu Projeyi Yaptım?</h2>
            <p>Bu projeyi, kullanıcı deneyimini ön planda tutarak responsive tasarım becerilerimi geliştirmek için gerçekleştirdim. Farklı cihazlarda ve ekran boyutlarında test ederek, modern web tasarım ilkelerini uygulamaya çalıştım.</p>
        `;
    }else if (cardNumber === 6) {
        content = `
            <h1>Todo List Projesi</h1>
            <img class="card-image" src="resimler/todo/todo-1.png" alt="about">
            <br>
            <p>Bu proje, kullanıcılara görevlerini kolayca takip etmelerini sağlayan basit bir Todo List uygulamasıdır. Kullanıcılar, yeni görevler ekleyebilir, mevcut görevleri silebilir ve tüm görevleri temizleyebilir. Ayrıca, görevler arasında filtreleme yaparak aradıkları görevleri hızla bulabilmeleri mümkündür.</p>
            <br>
            <h2>Özellikler</h2>
            <ul>
                <li><strong>Yeni Todo Ekleme:</strong>Kullanıcı, input alanına yazdığı metni "Todo Ekle" butonuna tıklayarak listeye ekleyebilir.</li>
                <img class="card-image" src="resimler/todo/todo-2.png" alt="about">
                <br> <br>
                <li><strong>Görev Silme: </strong> Her bir görev yanında bulunan "sil" ikonuna tıklayarak görevleri kolayca silebilir.</li>
                <img class="card-image" src="resimler/todo/todo-3.png" alt="about">
             

                <li><strong>Filtreleme:</strong> Kullanıcı, arama kutusuna yazdığı metni kullanarak görevleri filtreleyebilir ve yalnızca ilgili görevleri görüntüleyebilir.</li>
                <img class="card-image" src="resimler/todo/todo-4.png" alt="about">
            
            
            
            <img class="card-image" src="resimler/todo/todo-5.png" alt="about">
            <br>
            <li><strong>Tüm Görevleri Temizleme: </strong>Kullanıcı, tüm görevleri bir anda silebilir.</li>
            <img class="card-image" src="resimler/todo/todo-6.png" alt="about">
             <li><strong>Uyarı: </strong> Boş bir todo değeri eklenmeye çalışıldığında uyarı verir.</li>
            <img class="card-image" src="resimler/todo/todo-7.png" alt="about">
            <li><strong>Veri Kaydetme: </strong>Tüm görevler, kullanıcı sayfayı yenilediğinde bile kaydedilmiş olarak kalır, bu sayede görevler localStorage kullanılarak saklanır.</li>
            <img class="card-image" src="resimler/todo/todo-8.png" alt="about">
            <p>Bu projede, HTML, CSS ve JavaScript ile temel kullanıcı etkileşimlerini gerçekleştirdim. Bootstrap ve Font Awesome gibi popüler kütüphaneler kullanılarak kullanıcı dostu bir arayüz tasarlandı. Ayrıca, localStorage kullanarak veri kalıcılığı sağlandı.</p>
            </ul>
            `;
    }

    // İçeriği ekle
    document.getElementById("cardDetailContent").innerHTML = content;
}

function exitCard() {
    // Detay kısmını gizle
    document.getElementById("cardDetail").classList.remove("show");
    // Portföy kısmını tekrar göster
    document.getElementById("portfolio").style.display = "flex";
}