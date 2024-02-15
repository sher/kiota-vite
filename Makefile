.PHONY: kiota
kiota:
	docker run --rm \
		-v ./src/client:/app/output \
		-v ./openapi.yaml:/app/openapi.yaml \
		mcr.microsoft.com/openapi/kiota:1.11.1 \
		generate --co -b --language typescript
