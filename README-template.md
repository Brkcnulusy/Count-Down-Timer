# Ip Adresi Izleyici

- Bu projede 14 günden geri sayan bir zamanlayıcı mevcut. Herhangi bir etkileşimi yoktur.Saniye yani second 60' tan geriye sayıyor ve her 1 saniye azaldığında divlerin pozisyonu değişen bir animasyonu mevcut. Bu diğer zaman öğreleri içinde geçerlidir.

### Ekran Görüntüsü

![Ekran Görüntüsü](./assets/images/Ekran%20Alıntısı.PNG)

### Links

- Site Url'i: [Count-Down-Timer](https://brkcnulusy.github.io/Count-Down-Timer/)

### Meydan okuma

Kullanıcılar şunları yapabilmelidir:

- Sayfadaki tüm etkileşimli öğeler için fareyle üzerine gelme durumlarını görme.
- Her saniye geri sayan canlı bir geri sayım sayacı görün (sayımı 14 günden başlatın).
- **Bonus**: Bir sayı değiştiğinde, kartı ortadan çevirin.

### Genel Bakış

- Javascript kodları ifee fonksiyonları içine yazılmıştır. Sonrada ekleme yada geliştirme yapacak kişiler dikkat etmelidir.
- Responsive tasarımı mevcut olup farklı cihazlarda da görüntü bozulmamaktadır.
- Css kodları scss şeklinde yazılmıştır. Ekleme yada geliştirme yapacak kişi style.scss dosyasını compile etmelidir.
- Js ve CSS kodları modüler olarak yazılmıştır.

### Ne Öğrendim

- Daha önce hiç animasyon kullanmamıştım. Bu uygulamada animasyon kullanarak sayaçtaki sayılar değiştiğinde ortadan sayfa değişrir gibi bir animasyon ekledim.

```css
.half-width {
  width: 100%;
  height: 50%;
  transition: transform 0.5s ease-in-out;
  background-color: var(--Dark-desaturated-blue);
}
```

```js
let rotationAngle = 0;

export const _updateUI = function (element, content, topPart, bottomPart) {
  rotationAngle += 180;
  topPart.style.transform = `rotateX(${rotationAngle}deg)`;
  bottomPart.style.transform = `rotateX(${rotationAngle}deg)`;
  if (content < 10) {
    element.innerHTML = "0" + content;
  } else {
    element.innerHTML = content;
  }
};
```

### İle İnşa Edilmiştir

- HTML5
- CSS
- Flexbox
- SCSS
- Mobil Tasarım
- JavaScript

## Kurulum

1. Projeyi Kopyalayın
   İlk olarak, projeyi yerel bilgisayarınıza kopyalamk için GitHub'dan klonlayın:

```bash
git clone https://github.com/Brkcnulusy/Count-Down-Timer.git
cd Count-Down-Timer
```

2. Bağımlılıkları Yükleyin
   Herhangi bir Bağlılığı bulunmamaktır. Projece vanilya.js ile yazılmıştır.

3. Uygulamayı Çalıştırın
   Eğer Live Server uzantısı yüklü ise html dosyasına sağ tıklayıp ilk seçenek olan Live Server ile Açın seçeneğine tıklayıp açabilirsiniz.
   Live Server uzantısına sahip değilseniz terminale npm run dev yazarak ve Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

## Yazar

- Website - [Burak Can Ulusoy](https://mavifloravakfi.com/)
- LinkedIn - [@Brkcnulusy](https://www.linkedin.com/in/burak-can-ulusoy-375120272/)
- GitHub - [@Burakcnulusy](https://github.com/Brkcnulusy/)
- E-Mail - [brkcnulusy@gmail.com]

## Teşekkür

Bu projeyi frontend mentor adlı sitede gördüm ve yapmaya karar verdim. Site proje için gerekli olan tasarım resimleri ve sitede kullanmam gereken image dosyalarını benimle paylaştı. Frontend Mentor Ekibine teşekkür ederim.
