1. odpalenie projektu:
java -jar shop.jar

Powinno być w konsoli:

<DATA>  INFO 9812 --- [           main] com.marek.shop.ShopApplication           : Started ShopApplication in 6.872 seconds (JVM running for 7.394)

2. Sprawdzenie czy działa - http://localhost:8080/swagger-ui.html#/ (w przeglądarce)

3. Consolka bazy danych: 
JDBC URL: jdbc:h2:file:./data/shop
http://localhost:8080/h2  (bez hasła, tylko connect)