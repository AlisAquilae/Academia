---
fileClass: Base, Theories
title: 
Parents: 
Draft: 
Status: 
aliases: 
Authors: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
Since infiltration depends on many factors, it is not possible to set up a conceptual model based on relatively simple relationships. Therefore, people have been searching for empirical relationships to describe the mathematical processes. 

Several semi-empirical methods were developed of which **Horton's Equation** is one. Horton (1933) described infiltration with the following equation: 

$$
f(t)=f_\infty \, + \, (f_0 \, - \, f_\infty) \cdot e^{- \alpha \, t}
$$


Where:
- $f$ is the infiltration capacity (in L / T)
- $t$ is time (T)
- $f_\infty$ is the infiltration capacity at $t \to \infty$ 
- $\alpha$ is an empirical coefficient which depends on the soil type and the vegetation (in $T^{-1}$)

Also $f_0$ and $f_\infty$ depend on the soil type, the soil moisture and vegetation.

>[!Question]
>
>We can describe the infiltration of rainwater on clayey and sandy soils in regions with shallow groundwater tables, with Horton's equation. The following parameter values are given:
>
>For sandy soils
>- $f_\infty = 40$ mm/h
>- $f_0 = 245$ mm/h
>- $\alpha= 7$ /h
>
>For clayey soils:
>- $f_\infty = 10$ mm/h
>- $f_0 = 40$ mm/h
>- $\alpha = 4$ /h
>  
>  If it rains for 40 minutes with a constant intensity of 20 mm/h, will there be any surface runoff at the clayey and/or sandy soil? If yes, when will it start?
>  
>  
>  >[!Check]- Answer
>  >
>  >Surface runoff starts when the infiltration capacity becomes lower than the precipitation intensity. The infiltration capacity at $t = \infty$ ($f_\infty$) for sand is 40 mm/h. Hence, the infiltration capacity will never become lower than the precipitation intensity (of 20 mm/h). There will not be any surface runoff on the sandy soil. 
>  >
>  >The infiltration capacity at $t = \infty$ for the clayey soil is 10 mm/h, which is less than the precipitation intensity. Surface runoff will take place here, if the rain shower duration is sufficiently long. We can calculate when the surface runoff will take place with Horton's Equation: 
>  >
>  >$$
>  >f(t)=f_\infty \, + \, (f_0 \, - \, f_\infty) \cdot e^{- \alpha \, t}
>  >$$
>  >
>  >$$
>  >20=10+(40-10)e^{-3t_p} 
>  >$$
>  >
>  >$$
>  >t_p = \frac{\ln(\frac{20-10}{40-10})}{-3} = 0.37 \, \text{hours} = 22 \, \text{min}
>  >$$
>  >
>  >So after 22 minutes, surface runoff will take place on the clayey soil
>  

Exceedance of the infiltration capacity will lead to [[Infiltration Excess Overland Flow|Horton Overland Flow]], also known as [[Infiltration Excess Overland Flow]]. 