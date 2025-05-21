---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Advanced Hydrological Systems Analysis]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Advanced Hydrological Systems Analysis]]"]
---
# Introduction
Today: calibration, sensitivity and uncertainty part 3.

Yesterday: finding minimum of objective function using first-order (only gradient) and second-order (assume quadratic function near minimum) minimisation.

If we do this, how can we quantify the uncertainty in my parameter set? This uncertainty also generates uncertainty in my output, which we will discuss tomorrow

---
# Uncertainty in Parameters
Why do we never find our objective function to be perfect (e.g. $SS = 0$)? This is because we have uncertainty which we can never (fully) resolve. 

Again, we here only consider uncertainty in parameters, which is fully explained by uncertainty in measurements.

Thus, we never find $SS = 0$ due to observation errors. This is of course not reality, because there is always also uncertainty in the model, which we do not account for here. 

## The model demon
Consider a demon which has the same model. The demon knows the true parameter values, and can therefore produce a true model output (both of which we don't know). The model gives use these true values blurred by (random) noise. The model output and noise together are called the 'observation'.

Our goal is to find the optimal parameter set as close as possible to the true parameter set. We are trying to fit our model to the 'noisy' observation. Noise is changed every time we run the model. 

The demon generates many observation series by adding the error. For each observation series, we use the model for a different optimal parameter set. In doing so, we are fitting our model to the noisy observation, not the true observation. We thus end up with an ensemble of parameter sets. The ensemble of fitted parameters cam give estimation of the uncertainty. 

In reality, we don't have a demon adding noise constantly. Rather, there is uncertainty (and therefore noise) when making our observations
- Human error
- Device error

This noise level is unknown. We know the source to be present, but its magnitude is unknown (this is the demon's influence)

