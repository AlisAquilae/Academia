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
# How do we communicate model performance?
The process of model performance evaluation is of primary importance, not only in the model development and calibration process, but also when communicating the results to other researchers and to stakeholders. The basic ‘rule’ is that every modelling result should be put into context, for example, by indicating the model performance using appropriate indicators, and by highlighting potential sources of uncertainty, and this practice has found its entry into the large majority of papers and conference presentations.

While the question of how to communicate the performance of a model to potential end-users is currently receiving increasing interest, we - as well as many other colleagues - observe regularly that researchers take much less care when communicating model performance amongst ourselves. In doing so, we do not pay sufficient attention to making clear what the values represented by our performance measures really mean.

For hydrologists, the [[Nash-Sutcliffe Efficiency Measure]] has become a common part of our everyday jargon when reporting the results of a catchment modelling study. 

$$
NSE = 1 - \frac{\sum\limits^N_{t=1} \left[q_{\text{obs}}(t) - q_{\text{sim}}(t) \right]^2}{\sum\limits^N_{t=1} \left[q_{\text{obs}}(t) - \overline{q}_{\text{obs}} \right]^2}
$$

Somehow, we seem to ignore the fact that modellers in other fields of environmental sciences are not often familiar with what a ‘Nash value’ is. More important, it is worth asking whether we ourselves know what it means when we report that a model has a 'Nash value of $0 \cdot 87$'. The reality is that the Nash efficiency value, while a convenient and normalised measure of model, does not provide a reliable basis for comparing the results of different case studies.