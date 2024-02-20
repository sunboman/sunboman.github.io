m ?= "publish"  # Default commit message

.PHONY: publish

# Target: publish
publish:
	git add .
	git commit -m '$(m)'
	git push