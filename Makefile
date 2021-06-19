install:  # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run"brain-games": "bin/brain-games.js"

lint:
	npx eslint .