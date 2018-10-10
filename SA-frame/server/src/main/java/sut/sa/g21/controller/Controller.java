package sut.sa.g21.controller;
import java.util.Collection;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import sut.sa.g21.entity.Classification;
import sut.sa.g21.entity.Country;
import sut.sa.g21.entity.Product;
import sut.sa.g21.entity.Type;
import sut.sa.g21.repository.ClassificationRepository;
import sut.sa.g21.repository.CountryRepository;
import sut.sa.g21.repository.ProductRepository;
import sut.sa.g21.repository.TypeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller{
    @Autowired private ClassificationRepository classificationRepository;
    @Autowired private ProductRepository productRepository;
    @Autowired private CountryRepository countryRepository;
    @Autowired private TypeRepository typeRepository;

    // --------------- Classification ------------------

    @GetMapping("/Classification")
    public Collection<Classification> classification(){
        return classificationRepository.findAll();
    }

    @GetMapping("/Classification/{classID}")
    public Optional<Classification> takeinClassificationByid(@PathVariable Long classID ){
        return classificationRepository.findById(classID);
    }

    @PostMapping("/Classification/addClassification/{className}")
    public Classification newClassification(@PathVariable String className){
        Classification newClassification = new Classification(className);
        return classificationRepository.save(newClassification);  
    }

    @PutMapping("/Classification/ClassName/{productName}/{className}")
    public Product putClassName(@PathVariable String productName,@PathVariable String className) {
        Product newProduct = productRepository.findByProductName(productName);
        Classification newClassification = classificationRepository.findByClassName(className);
        newProduct.setClassification(newClassification);                                                
        return productRepository.save(newProduct);                               
    }
    @PutMapping("/Classification/TypeName/{productName}/{typeName}")
    public Product putType(@PathVariable String productName,@PathVariable String typeName) {
        Product newProduct = productRepository.findByProductName(productName);
        Type newType = typeRepository.findByTypeName(typeName);
        newProduct.setType(newType);                                                  
        return productRepository.save(newProduct);                               
    }
    @PutMapping("/Classification/CountryName/{productName}/{countryName}")
    public Product putCountry(@PathVariable String productName,@PathVariable String countryName) {
        Product newProduct = productRepository.findByProductName(productName);
        Country newCountry = countryRepository.findByCountryName(countryName);
        newProduct.setCountry(newCountry);                                                 
        return productRepository.save(newProduct);                               
    }
    @PutMapping("/Classification/{productName}/{className}/{typeName}/{countryName}")
    public Product setClassification(@PathVariable String productName,@PathVariable String className ,@PathVariable String typeName,@PathVariable String countryName) {
        Product newProduct = productRepository.findByProductName(productName);
        Country newCountry = countryRepository.findByCountryName(countryName);
        Classification newClassification = classificationRepository.findByClassName(className);
        Type newType = typeRepository.findByTypeName(typeName);
        newProduct.setCountry(newCountry);
        newProduct.setClassification(newClassification);                         
        newProduct.setType(newType);                          
        return productRepository.save(newProduct);                               
    }
    // ---------------  Product ---------------

    @GetMapping("/Product")
    public Collection<Product> product(){
        return productRepository.findAll();
    }
    
    @GetMapping("/Product/{productID}")
    public Optional<Product> takeinProductByid(@PathVariable Long productID ){
        return productRepository.findById(productID);
    }
     // --------------- Country --------------

     @GetMapping("/Country")
     public Collection<Country> Country(){
         return countryRepository.findAll();
     }
     @GetMapping("/Country/{countryID}")
     public Optional<Country> takeinCountryByid(@PathVariable Long countryID ){
         return countryRepository.findById(countryID);
     }

    // --------------- Type --------------
    @GetMapping("/Type")
    public Collection<Type> Type(){
        return typeRepository.findAll();
    }

    @GetMapping("/Type/{typeID}")
    public Optional<Type> takeinTypeByid(@PathVariable Long typeID ){
        return typeRepository.findById(typeID);
    }
    @PostMapping("/Type/addType/{typeName}")
    public Type newType(@PathVariable String typeName){
        Type newType = new Type(typeName); 
        return typeRepository.save(newType); 
    }
}
