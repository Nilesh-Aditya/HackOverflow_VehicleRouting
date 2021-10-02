<p align="center">
  <a href="https://github.com/Nilesh-Aditya/HackOverflow_VehicleRouting">
    <img width="64" height="64" alt="Hackoverflow Vehicle Routing" src="https://www.researchgate.net/profile/Simon-Tamayo-Giraldo/publication/324690557/figure/fig1/AS:618419355389958@1524454072617/Optimization-results-with-the-classical-VRP.png" />
  </a>
</p>
<h1 align="center">Hackoverflow Vehicle Routing</h1>
<p align="center"><i>Delivering goods to all customers and minimising for the cost of the routes.</i></p>
<p align="center"><br /></p>

The vehicle routing problem is one of the most studied combinatorial optimization topics, due to its practical importance and methodological interest.


Different types of formulations are proposed in the literature to model vehicle routing problems. Currently, the most used ones can be fitted into two classes, namely vehicle flow formulations and set partitioning formulations. These types of formulations differ from each other not only due to their variables and constraints but also due to their main features. Vehicle flow formulations have the advantage of being compact models, so general-purpose optimization packages can be used to straightforwardly solve them. However, they typically show weak linear relaxations and have a large number of constraints. Branch-and-cut methods based on specialized valid inequalities can also be devised to solve these formulations, but they have not shown to be effective for large-scale instances. On the other hand, set partitioning formulations have stronger linear relaxations, but require the implementation of sophisticated techniques such as column generation and specialized branch-and-price methods.

So, we hereby propose a novel approach to learn the local-search heuristics that iteratively improves the solution of Vehicle Routing Problem (VRP). Our idea to learn heuristics for combinatorial optimization problems is promising as it can save costly development.



