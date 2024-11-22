---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Coastal Oceanography and Delta Geology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Coastal Oceanography and Delta Geology]]"]
---
This chapter gives a description of ocean wave propagation, wave spectra, and their hydrodynamics in deep water and near the coast. The wave hydrodynamics presented in this chapter is based upon linear wave theory. This theory assumes (1) gravity is the only force acting on the wave, (2) water depth changes are gradual, and (3) that the fluid is inviscid, incompressible and irrotational. These assumptions generally hold for small steepness, $a |k| \ll 1$ . The latter implies that the amplitude ($a$) should be small as compared to the wave length ($2\pi / k$)

>[!Note]
>It is important to realise many (more complex) wave theories exist, such as Stokes' 2nd, 3rd or even 4th order wave theory

>[!Info]
>This chapter is mainly derived from Holthuijsen (2007) and Davidson-Arnott (2006) even tough linear wave theory was originally developed by Airy in 1825 (and is therefore also referred to as Airy wave theory). All units are MKS unless specified.

# 6.1 Simple Wave Description
In this section, a description of a simple ocean wave is presented. The propagation of a basic ocean wave, in a Cartesian coordinate system, is visualized in figure 6.1. 

![[Pasted image 20241122124446.png]]

Along the horizontal axis, the wave period and wave length are shown. The wave period ($T$) is the time that is needed to complete one complete cycle and the wave length ($L$) is the distance between the crest of two waves. In this picture, the ocean surface state at rest coincides with the vertical coordinate $z=0$. A flat bottom is assumed at a depth of $z=-d$ (not shown in the figure). If a sinusoidal wave propagates in the positive $x$-direction, then the surface of the ocean ($\eta$) is located at $z=\eta(x,t)$ and according to linear wave theory the surface undulations can be described by:

$$
\eta(x,t) = a \sin(\omega t + kx) \tag{6.1}
$$

in which
- $\omega$ is the radian frequency
- $k$ is the wave number, and
- $a$ is the amplitude of the wave

The radianf requency and the wave number are given by

$$
\omega = \frac{2\pi}{T} \tag{6.2}
$$

and

$$
k = \frac{2\pi}{L} \tag{6.3}
$$

where $T$ is the period and $L$ is the wave length, respectively.

The harmonic wave is propagating with a constant phase, this could be observed by following the crest of the wave from a fixed point

The speed at which the wave propagates is called the phase speed, and is denoted as

$$
c = \frac{\mathrm dx}{\mathrm dt} = \frac{\omega}{k} = \frac{L}{T} \tag{6.4}
$$

---
# 6.2 Orbital Motion
In the previous section the water surface motion was presented. However, a passing wave not only effects the water surface, it also sets the water under the surface in motion. In linear wave theory this movement is orbital with an amplitude that decreases with depth, see image below. This decrease in orbital diameter is hyperbolic and at a depth of half the wave length the orbital motion is already negligible.

![[Pasted image 20241122125844.png]]

The following two equations describe the horizontal and vertical velocity components respectively at any location and moment:

$$
u_x = \omega a \frac{\cos(h)(k(d+z))}{\sin(h)(kd)}\sin(\omega t-kx) \tag{6.5}
$$

$$
u_z = \omega a \frac{\sin(h)(k(d+z))}{\sin(h)(kd)}\sin(\omega t-kx) \tag{6.5}
$$

In which
- $d$ is the water depth
- $z$ is the vertical height with $z=0$ at the mean surface water elevation. 

From these equations, it is visible that the orbital velocities increase with increasing amplitude and wave frequency. In the crest of the wave ($\eta \gt 0$) the velocity is always directed in the down-wave direction. The opposite holds for the trough of the wave where the velocity is always oriented up-wave

![[Pasted image 20241122130228.png]]

Equations 6.5 and 6.6 are complicated, so in practice simplifying assumptions are made depending on the wave environment. The most common assumptions are based on the water depth $d$ and two limiting conditions; deep and shallow water

## 6.2.1 Deep Water
For deep water, one can assume the depth is much larger than the wavelength, such that $kd \to \infty$. This assumption simplifies the orbital motion equations to

$$
u_x = \omega ae^{kz} \sin(\omega t - kx) \tag{6.7}
$$

$$
u_z = \omega ae^{kz} \cos(\omega t - kx) \tag{6.8}
$$

From equations 6.7 and 6.8, it is visible that the orbital velocity components have both the same magnitude. However, the horizontal and vertical velocity component are $90 \degree$ out of phase with each other. The latter implies that the motion is exactly circular. 

The resulting velocity from the horizontal and vertical velocity component can be obtained by $u = \sqrt{u_x^2 + u_z^2}$ and using the trigonometric relation $\sin^2(x) + \cos^2(x)=1$, resulting in

$$
u = \omega ae^{kz} \tag{6.9}
$$

Thus, the velocity becomes independent. At the mean sea level surface ($z=0$) the equation reduces to $u=\omega a$. This result could however have been expected because the length of the circular motion of the water particle is equal to $2\pi a$ and completes one circle in a wave period $T$. The latter implies that a particle must travel with a constant speed that is equal to $\omega a$. 

## 6.2.2 Shallow Water
For shallow water, the assumption can be made that $kd \to 0$, which reduces equations 6.5 and 6.6 to

$$
u_x = \frac{\omega a}{kd}(\omega t - kx) \tag{6.10}
$$

$$
u_z = \omega a(1+\frac{z}{d})\cos(\omega t - kx) \tag{6.11}
$$

From these equations, it can be observed that the magnitudes of the horizontal and vertical velocity components differ. To be more precise, the horizontal velocity component has become independent of the distance from the water surface. Indeed, from equation 6.11 it is visible that the vertical velocity at the bottom ($z=-d$) is zero (a boundary condition that was used to develop linear wave theory). Thus, the particle movement at the surface is elliptical and at the bottom a water particle only moves in the horizontal direction.

![[Pasted image 20241122131725.png]]

In practice, a good rule of thumb for applying deep water and shallow water assumptions is to consider the water deep if the depth $h$ compared to the deep-water wave length $L$ is in the order of $\frac{h}{L} \gt \frac{1}{2}$. Water is considered shallow if $\frac{h}{L} \lt \frac{1}{20}$. In between deep and shallow water, the full equation 6.5 and 6.6 should be used. 

---
# 6.3 Wave Spectrum
The previous sections described a single wave traveling across the water surface. In reality however, as the wind blows over the sea, it generates many different waves. These generated waves will differ in their amplitude, wave length and frequency. This implies that a spectrum of waves is generated. The shape of this spectrum is, to a first order, dependent on the wind speed and fetch (the length over which the wind has blown, see Figure 6.6). Initially, the generated spectrum is composed of short, high frequency waves. In time, short-wave dissipation and non-linear interactions between short waves will transfer wave energy to lower frequencies (longer period waves). However, for reasons that will be discussed in next section, the wave field will disintegrate into regular fields of near-equal frequencies (narrow-banded spectra).

![[Pasted image 20241122132452.png]]

The wave spectrum can be determined from analyzing surface water elevations time series. Statistical properties such as the mean wave period, wave length and amplitude can be determined from such a time series. However, for most purposes the significant wave period and wave height are used. The significant wave height is the mean of the one third largest waves. The significant wave period is, then, the wave period corresponding to the significant wave height

Combined, wave heights and wave periods are often shown as a wave spectrum (or variance density graph or power spectrum, see figure 6.7). The wave spectrum describes how much one single frequency contributes to the total variance of the time series. Using the variance is physical meaningful, since it relates wave height to the wave energy in a wave.

>[!Info]
>The total energy per unit crest is proportional to the square of the wave height ($E = \rho gH^2/8$), see also Section 6.6. In other words, the energy in a wave is proportional to the square of the deviation from the mean surface.


![[Pasted image 20241122133737.png]]

