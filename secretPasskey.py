# Made by YoshiGamer360

import random


noun1Chosen = ''
noun2Chosen = ''
verbChosen = ''
adjective1Chosen = ''
adjective2Chosen = ''
adverbChosen = ''
prepositionChosen = ''
pronounChosen = ''
pronoun2Chosen = ''


nouns = ["ant", "ape", "bat", "bee", "cat", "cow", "dog", "eel", "elk", "emu", "fly", "fox", "hen", "hog", "kid", "man", "owl", "pig", "rat", "yak"]

verbs = ["bounced", "climbed", "crawled", "danced", "dived", "hopped", "jumped", "leaped", "limped", "ran", "rolled", "skipped", "slid", "spun", "swam", "swung", "tumbled", "walked", "wandered", "whirled"]

adjectives = ['angry', 'alert', 'amusing', 'anxious', 'ashamed', 'awake', 'bad', 'beautiful', 'big', 'bitter', 'black', 'blue', 'blushing', 'brave', 'bright', 'brisk', 'bumpy', 'busy', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'clumsy', 'cold', 'colorful', 'comfortable', 'concerned', 'confused', 'cool', 'courageous', 'crazy', 'creamy', 'creepy', 'crisp', 'crooked', 'cruel', 'crunchy', 'curly', 'cute', 'damp', 'dangerous', 'dark', 'deep', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'difficult', 'dirty', 'dizzy', 'dry', 'dull', 'eager', 'elated', 'fancy', 'fast', 'fat', 'fierce', 'flat', 'fluffy', 'free', 'fresh', 'full', 'funny', 'gentle', 'giant', 'gigantic', 'glowing', 'greasy', 'green', 'grumpy', 'happy', 'hard', 'hard', 'heavy', 'high', 'hot', 'hot', 'humble', 'hungry', 'icy', 'juicy', 'lazy', 'light', 'long', 'loose', 'loud', 'lucky', 'melted', 'moist', 'muddy', 'narrow', 'neat', 'noisy', 'old', 'orange', 'pink', 'playful', 'polite', 'pretty', 'proud', 'purple', 'quick', 'quiet', 'red', 'ripe', 'rocky', 'rotten', 'round', 'salty', 'sharp', 'shiny', 'short', 'short', 'silly', 'simple', 'slim', 'slow', 'small', 'smooth', 'smooth', 'soft', 'sour', 'spicy', 'spiky', 'squiggly', 'steady', 'sticky', 'straight', 'striped', 'strong', 'sweet', 'tall', 'tart', 'thick', 'thin', 'tiny', 'tough', 'warm', 'wet', 'wide', 'wild', 'wise', 'yellow', 'young']


adverbs = ['carefully', 'fast', 'loudly', 'quickly', 'quietly', 'rapidly', 'slowly', 'smoothly', 'softly', 'steadily', 'swiftly', 'gently', 'hard', 'high', 'low', 'nicely', 'poorly', 'well', 'badly', 'eagerly']

prepositions = ['above', 'across', 'behind', 'beside', 'near', 'next to', 'off', 'on', 'over', 'under', ] 
# 'beyond', 'inside', 'through', 'below', 'in', 'into', 'down', 'up', 'onto', 'out', 

numberOfPhrases = int(input())
if numberOfPhrases > 100:
  numberOfPhrases = 100
for i in range(numberOfPhrases):
  # Adjective1
  adjective1Chosen = random.choice(adjectives)
  
  # Adjective2
  adjective2Chosen = random.choice(adjectives)
  while adjective2Chosen == adjective1Chosen:
    adjective2Chosen = random.choice(adjectives)
    
  # Noun1
  noun1Chosen = random.choice(nouns)
  
  # Pronoun1
  pronoun1Chosen = 'the'
  
  # Noun2
  noun2Chosen = random.choice(nouns)
  while noun2Chosen == noun1Chosen:
    noun2Chosen = random.choice(nouns)
  
  # Pronoun2
  decidingNumber = random.randint(1, 2)
  if decidingNumber == 1:
    pronoun2Chosen = 'the'
  else:
    if adjective2Chosen[0] == 'a' or adjective2Chosen[0] == 'e' or \
    adjective2Chosen[0] == 'i' or adjective2Chosen[0] == 'o' or \
    adjective2Chosen[0] == 'u':
      pronoun2Chosen = 'an'
    else:
      pronoun2Chosen = 'a'

  # Verb
  verbChosen = random.choice(verbs)

  # Adverb
  adverbChosen = random.choice(adverbs)
  
  # Prepostion
  prepositionChosen = random.choice(prepositions)
  
  print(f'{pronoun1Chosen} {adjective1Chosen} {noun1Chosen} {adverbChosen} {verbChosen} {prepositionChosen} {pronoun2Chosen} {adjective2Chosen} {noun2Chosen}')


# 3,600,000,000 possibilities
