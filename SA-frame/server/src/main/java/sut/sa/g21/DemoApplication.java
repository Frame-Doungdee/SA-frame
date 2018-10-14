package sut.sa.g21;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import sut.sa.g21.entity.Classification;
import sut.sa.g21.entity.Country;
import sut.sa.g21.entity.Product;
import sut.sa.g21.entity.Type;
import sut.sa.g21.repository.ClassificationRepository;
import sut.sa.g21.repository.CountryRepository;
import sut.sa.g21.repository.ProductRepository;
import sut.sa.g21.repository.TypeRepository;
import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@Bean
    ApplicationRunner init(ProductRepository productRepository, TypeRepository typeRepository, CountryRepository countryRepository, ClassificationRepository classificationRepository) {
		return args -> {
			Stream.of("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe").forEach(countryName -> { 
				countryRepository.save(new Country(countryName));
            });
			countryRepository.findAll().forEach(System.out::println);

			Stream.of("เสื้อผ้า","รองเท้า","นาฬิกา","กระเป๋า","เครื่องดนตรี","มือถือ","กล้อง","เครื่องใช้ไฟฟ้า").forEach(className -> { 
                classificationRepository.save(new Classification(className));
            });
			classificationRepository.findAll().forEach(System.out::println);

			Stream.of("สินค้าทั่วไป","สินค้ามาใหม่","สินค้าขายดี").forEach(typeName -> { 
                typeRepository.save(new Type(typeName));
            });
			typeRepository.findAll().forEach(System.out::println);

			// Stream.of("iPhone 8","Samsung Galaxy S9+","G-Shock G-STEEL GST-400G-1A9DR นาฬิกา","NIKE Miler SS PR เสื้อวิ่งผู้ชาย","Michael Kors JET SET ITEM BACKPACK VANILLA").forEach(productName -> { 
            //     productRepository.save(new Product(productName));
            // });
			// productRepository.findAll().forEach(System.out::println);
			
			

			String productList[] = {"Ferrari", "Porsche", "Lamborghini", "Bugatti","Audi", "Ford", "Nissan"};
			String detailProduct[] = {"Ferrari 488", "Porsche 911", "Lamborghini Aventador", "Bugatti Chiron", "Audi R8", "Ford Mustang", "Nissan GTR R35"};
			String imgUrl[] = {
				"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/488-spieder-web-024.jpg?itok=RU9katpv",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Porsche_918_Spyder_SAO_2014_0281.JPG/1200px-Porsche_918_Spyder_SAO_2014_0281.JPG",
				"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-original.jpg",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bugatti_Chiron_IMG_0087.jpg/1200px-Bugatti_Chiron_IMG_0087.jpg",
				"https://s.aolcdn.com/commerce/autodata/images/USC70AUC171B021001.jpg",
				"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/mustang-wc-3966.jpg?itok=5fOhpOXz",
				"https://cdn.shopify.com/s/files/1/0747/3829/products/mQ0326_1024x1024.jpeg?v=1485014085"};
			double productPrice[] = {599.0, 650.0, 789.0, 669.0, 889.0, 999.0, 556.0};
			for(int i = 0; i < productList.length; i++) {
				Product product = new Product();
				product.setProductName(productList[i]);
				product.setProductDetail(detailProduct[i]);
				product.setProductImgUrl(imgUrl[i]);
				product.setProductPrice(productPrice[i]);
				productRepository.save(product);
			}
			productRepository.findAll().forEach(System.out::println);
		};
	}
}
