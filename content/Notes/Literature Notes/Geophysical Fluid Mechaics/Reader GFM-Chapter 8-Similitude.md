---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---
# 8.1 Introduction
In this chapter, we connect the concepts of dimensionless analysis to introduce the concept of similarity or similitude. Similitude is a concept that relates the behaviour of an object in a given flow field with its behaviour in a different flow field under different operating conditions. This concept allows you to compare and study two scenarios of the geophysical flows that are reproduced or observed, for instance, by laboratory experiments, field experiments, and numerical simulations under different conditions of space and time. For example in the laboratory, at a different scale, we are able to reproduce small-scale flow similar to the river transport or the wind acting against a wind power station.

## 8.1.1 What do we understand by similitude in flows?
Similitude is a concept to test flow models that reproduce the geophysical flow. A model is said to have similitude with the real application prototype if they share geometric, kinematic and dynamics similarity. 

>[!Note]
>During the chapter, the words similarity and similitude are interchangeable


---
# 8.2 Modelling approaches in fluid mechanics
The physical (conservation) laws introduced in the previous chapters enable us to interpret and quantify the motions and energy of the water and atmospheric flows. They also provide us with a framework in which we attempt to reproduce the main characteristics of the water or airflow. As we will learn in the following sections, there are other methods to study and analyse the main flow characteristics.

## 8.2.1 How do we understand and reproduce the main characteristics of water or airflow?
To understand and reproduce the main characteristics of an air or water flow, we have three methods to study the flow:
- **Field-scale observations**: We use observational techniques that allow us to quantify the main characteristics of the motion and energy of the water and airflow. They provide a quantification of the real conditions, but the temporal and spatial coverage of field measurements is limited. However, new techniques such as remote sensing are rapidly developing and improving spatial and temporal coverage. The main drawback is that there is little or no control over the conditions during the field observation survey.
- **Numerical computer simulation**: We apply the physical conservation laws of mass, momentum, and energy. We approximate them, using so-called numerical analysis techniques, into discrete equations that can be solved on a computer. Roughly speaking, the spatial grid and the time step, which together constitute the “discretisation”, constrain which part of the flow is solved explicitly. The characteristics that are solved explicitly are the evolution of fluid motion between grid cells and over time intervals larger than the discrete time step. For processes that have smaller and faster spatiotemporal scales (i.e. turbulence) we require a representation of the motions, ı.e. parameterisation. This will be discussed in [[Reader GFM-Chapter 10-Turbulence modelling|Chapter 10]].
- **Physical scale models**: We use laboratory facilities to reproduce the flow. The advantage is that we can control the conditions, but the flow is reproduced with limitations on the spatiotemporal scales. In interpreting the results obtained by the physical scale model, it is key to use dimensionless analysis and similarity to connect the lab experiment to the real flow characteristics, as we will explain in this chapter.
- **Artificial intelligence**: We apply machine learning techniques to support aspects of the techniques described above. For instance, we can improve the analysis of large-scale datasets of observations and quantitative data processing, improve the efficiency and accuracy of numerical computer techniques, reduce manual intervention, and improve the prediction accuracy of the water and airflow. 

---
# 8.3 Types of similarity
We describe three types of similarity that enable us to compare our models with the real (also named prototype) flow. The three similarity forms we will use in this course are: geometric, kinematic and dynamic. Their differences lie in what characteristics are comparable between model and prototype: shape (geometric), velocity (kinematic), and force (dynamic)

- **Geometric similitude**: It is described as the model is the same shape as the prototype. Geometric similarity means that a model is an exact geometric replica of the prototype. The main properties are:
	  1. Model and prototype have the same shape
	  2. All linear dimensions of the model are related to the corresponding dimensions of the prototype by a constant scalar factor
	
	A representative example of geometric similitude is an airplane reproduced at a scale of 1:100. Geometric similarity means that a model is an exact replica of the prototype
	
	>[!Note]
	>This does not necessarily mean that the Re/Ma regimes that the smaller scale plane will encounter are the same, which is achieved only if the flow is adjusted. Then, the model is also dynamically similar

- **Kinematic similarity**: It is described as the velocity at any point in the model flow is proportional by a constant scale factor to the velocity at the same point in the prototype flow, while it is maintaining the flow's streamlined shape
- **Dynamic similitude**: It is described as the ratio of all forces acting on corresponding fluid particles and boundary surfaces in the two systems (model and prototype) are constant. 