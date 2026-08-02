Top level Summary
Story time in Miko3
Improved recommendation (Story matching, genre requests, podcast bias etc) 
Locale enablement and global library, secondary locale based story serving
Major changes

Story Matching to serve to story requests better
Tell me a story about dinosaur
Tell me a story where trains friends
Tell me a story about a princess who slept
Improved Recommendations for higher utilization of Podcasts
Higher bias towards Podcasts
Genre based recommendation 	
English story / Spanish story
Audio story / video story
Bedtime story / adventure story


All Locale Media library - serve based on Secondary locale
Recommend stories from configured secondary locales
Tell me an English story – support such language story command
Recommend an English story
Even if the story isn’t 


Episode trigger structure to support Story match in adv. Recommendation, notification and in-skill recommendation
Episode level Invocation commands - selected about 50 commands


Speak Story Provider name in STORYSTART expression	
Needs to be added in DB


Audio vs Video distinction for Miko3 stories
Needs to be added in DB
Story Cover art
Needs to be added in DB
Asset link for Miko3 stories
Needs to be added in DB


Time based Ad Skipping in iHeart Podcast



– Explicit → 
– Specific context + Language selection
– Genre (how to handle in language?)
– Generic → from Primary+Secondary locale (weighted)
Tell me pancake story


Fixes
Previous command fix for normal stories | BE
Next command to give a story from genre only for requests where a particular Genre was asked, and if not available, then suggest another story. | BE
MAX story being recommended to Non max | AI
Profanity should give Resume if story is playing, nothing if story is paused, and repeat in other cases


Miko3
Touch screen support 
Show cover art + Story Name + story provider
Large tappable icons for pause, play, next.


Playback Controls
“Pause / Resume” buttons ( the UI will still show the video/audio)
Forward and backward on the seek bar(the user would be able to tap and move the seek bar forward and backward)
Next story after the current one ends(or if the user takes the seek baar to the end)



Audio and Video distinction

Daytime → prioritize video stories (audio stories explicitly requested)
Evening/Night → prioritize audio stories (don’t recommend video stories at night)