---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 4.1 Introduction
In the preceding discussions, Bernoulli's Law was presented as a foundational principle in fluid dynamics, focusing on the relationship between potential, kinetic and pressure energy, and how these forms of energy are conserved along a streamline. This conservation, however, assumes an idealised scenario where no energy is lost, and the total energy remains constant throughout the flow. While this serves as a useful first-order approximation, it does not fully capture the complexities of real-world fluid behaviour. In practical situations, energy is inevitably lost due to friction, primarily manifesting as heat. 

In 1845, James Joule was the first to quantitatively demonstrate the conversion of mechanical energy into heat through friction. His work marked a pivotal step in understanding the thermodynamics of energy dissipation in fluids. In real fluid flows, energy losses are caused by friction at both the walls of a conduit and within the fluid itself, due to internal friction resulting from viscosity. While the temperature increase due to this friction is miniscule and dissipates rapidly into the surroundings, the effect on energy transfer is significant enough to warrant consideration in fluid dynamics models. 

This chapter will introduce friction as an energy loss mechanism and explore how to pragmatically account for it in fluid models. By incorporating energy losses into Bernoulli's equation, we move closer to realistic representations of flow, particularly in practical applications like pipe systems and open channels. Topics covered will include the Reynolds number and its role in distinguishing laminar from turbulent flow, adjustments to Bernoulli's law for both gradual and localised energy losses, and common empirical formulas like Manning's and Chezy's equations for open channel flow. Finally, we will discuss how these concepts relate to characterising flow conditions, including equilibrium, critical, subcritical, and supercritical flows. 

---
# 4.2 Friction and energy losses
## 4.2.1 The Reynolds number: Laminar vs. Turbulent flow
One way in which friction shows itself in a measurable way is in the velocity profile. It is important to distinguish two flow regimes: laminar and turbulent. Reynolds demonstrated this in his famous ink-experiment. He introduced a thin line of ink in a tube containing a flowing fluid. He observed that two situations can occur:
- The ink remained concentrated in 