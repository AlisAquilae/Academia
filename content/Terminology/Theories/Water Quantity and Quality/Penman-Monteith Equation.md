---
fileClass: Base, Theories
title: 
Parents: ["[[Reader WQQ-Chapter 3-Evapotranspiration]]"]
Draft: 
Status: Done
aliases: 
Authors: 
Related Notes: ["[[Reader WQQ-Chapter 3-Evapotranspiration]]"]
Related Terminology: 
Related Courses: ["[[Water Quantity and Quality]]"]
---
[[Evapotranspiration]] is driven by the difference in water vapour pressure between the evaporating (land) surface and the atmosphere. In [[Potential Evapotranspiration]] methods, it is typically assumed that evapotranspiration takes place from a saturated surface, and that the vapour pressure ($e$) at the surface equals the saturated vapour pressure at the surface temperature, i.e. $e = e^* (T_{\text{surf}})$. Thus, direct determination of evapotranspiration would require observations of land surface temperature, which are not routinely available. 

*Penman (1948)* was among the first to propose a way around this problem. Central in the derivation of the Penman-equation is the linearisation of the saturation vapour pressure versus temperature-curve (the [[Clausius-Clapeyron Equation|Clausius-Clapeyron Relation]]) at air temperature $T_{\text{air}}$:

$$
\Delta = \frac{e^* (T_{\text{surf}}) - e^*(T_{\text{air}})}{T_{\text{surf}} - T_{\text{air}}}
$$

In this equation, the temperature gradient $T_{\text{surf}} - T_{\text{air}}$ represents the driving force behind the [[Sensible Heat Flux]]. By combining this equation with the simplified land surface energy balance, $T_{\text{surf}}$ can be eliminated. The Penman equation thus combined information on the [[Latent Heat Flux|Latent]] as well as the sensible heat flux, which are coupled by the land surface energy balance. This is one of the reasons why this equation is often seen as the best possible estimate of ET from meteorological data alone. 

The original Penman equation was developed for evaporation from a wet surface and only parameterised the aerodynamic resistance $r_a$, while neglecting the additional surface resistance $r_s$ that stomata cause when the main source of evapotranspiration is from within the stomata. The **Penman-Monteith Equation** combines the aerodynamic and surface resistance, and reads

$$
\lambda ET_{\text{pot}} = \frac{\Delta (R_{\text{net}} - G) + \frac{\rho_a c_p}{r_a} \text{VPD}}{\Delta + \gamma \left(1+\frac{r_s}{r_a} \right)}
$$

in which
- $\rho_a$ is the density of air
- $\Delta$ is the slope of the saturation vapour pressure versus temperature-curve at $T_{\text{air}}$
- $c_p$ is the specific heat capacity ($\approx 1.01 \times 10^3$ J kg$^{-1}$ K$^{-1}$),
- $\text{VPD}$ the [[Vapour Pressure Deficit]] at reference level,.
- $r_a$ the aerodynamic resistance to evaporation
- $r_s$ the surface resistance related to the size and opening of the stomata

The Penman-Monteith equation can also be written as

$$
\lambda ET_{\text{pot}} = \underbrace{c_1 \times (R_{\text{net}} - G)}_{\text{radiation}} + \underbrace{c_2 \times \text{VPD}}_{\text{mass tramsfer}}
$$

in which it can be more directly seen that both radiation and mass transfer due to turbulent exchange driven by a VPD gradient contribute to evapotranspiration.

The Penman-Monteith equation combines the effect of two driving factors: radiation and "mass transfer", which quantifies the vapour pressure gradient and the potential for turbulence in the boundary layer to transport moisture away from the land surface. Therefore the Penman-Monteith equation is also referred to as a combination equation. Theoretically, evapotranspiration can be driven by any of the two factors alone, but in practice the radiation term dominates.