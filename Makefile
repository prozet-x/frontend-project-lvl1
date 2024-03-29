install:  # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node games/brain-even.js

brain-calc:
	node games/brain-calc.js

brain-gcd:
	node games/brain-gcd.js

brain-prime:
	node games/brain-prime.js

brain-progression:
	node games/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .