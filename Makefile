KIOTA = $(PWD)/bin/kiota
KIOTA_VERSION = v1.11.1-preview.202402150001
KIOTA_OS = osx

$(KIOTA):
	mkdir -p bin
	curl -sSLfO https://github.com/microsoft/kiota/releases/download/$(KIOTA_VERSION)/$(KIOTA_OS)-x64.zip
	unzip $(KIOTA_OS)-x64.zip -d bin
	rm $(KIOTA_OS)-x64.zip
	chmod +x $(KIOTA)

.PHONY: kiota-generate
kiota-generate: $(KIOTA)
	$(KIOTA) generate -d ./openapi.yaml --language typescript --co -o ./src/client
