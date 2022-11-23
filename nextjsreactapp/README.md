# Entry File in NextJsAPP
```
_app.js
```
# Première page de notre application Next.js
Toute la logique de cette première page va se toruver dans le fichier:
```
/src/index.js
```

# Que ce passe-t-il dans le fichier */pages/products.js*

Dans ce fichier ci on fetch tout les produits de notre API.

Jusque maintenant j'utilisais la fonction getStaticProps()

Que se passe t-il quand j'utilise cette fonction offerte par NextJS

> NextJ, lorsque va être compiler, va précharger la page avec les donnée récupérer dans cette fonction *getStaticProps*, c'est à dire que lorsque mon client tentera d'acceder à la page /products affichant tous articles, une page html contenant toutes les données préchargées sera renvoyé au client. Lorsque le client tentera d'acceder à cette page,aucune requête ne sera faite à l'API contenant les données présente sur la page.

Au contraire si l'on veut que l'on nous envoient des pages avec les dernières données de notre backend, on doit utiliser **_getServerSideProps_**.

Grâce à cette fonction, lorsqu'un client désirera afficher la page des produits, le serveur NextJS va recevoir une requête et ensuite lancera le code contenant dans _getServerSideProps_. Le fetch ne sera fait qu'à ce moment là.

Le HTML créer sur base du composant React sera générer au sein du serveur NextJS pour ensuite être renvoyer au client.

Mais le ServerSideRendering n'est pas magique et il est à utiliser avec parcimonie car il est plus couteux en temps par rapport SSG, car le serveur NextJS se doit de d'abord récupérer les données et ensuite de générer le HTML correspondant 


# Quand est-ce que le SSR est requis?

Lorsqu'on a besoin de récupérer des données à chaque requête.

# getServerSideProps

- est lancé côté serveur et jamais côté client.
- est lancé lors de la demande d'une page spécifique
