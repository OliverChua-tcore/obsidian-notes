module.exports = async (tp, opts = {}) => {

    const ACCOUNTS_FOLDER = opts.folder || "efforts/finance/accounts";  // no trailing slash

    const folder = app.vault.getAbstractFileByPath(ACCOUNTS_FOLDER);
    if (!folder || !(folder instanceof tp.obsidian.TFolder)) {

        new Notice(`Accounts folder not found or not a folder: "${ACCOUNTS_FOLDER}"`);
        return "";

    }

    const files = folder.children.filter(f => f instanceof tp.obsidian.TFile);
    let accounts = [];

    for (const f of files) {

        const cache = app.metadataCache.getFileCache(f) || {};
        const fm = cache.frontmatter || {};
        if (fm.type === "account" && fm["account-name"]) {

            accounts.push({

                label: fm["account-label"] || fm["account-name"],
                name: fm["account-name"],
                type: fm["account-type"] || null,       // Assets / Expenses / ...
                group: fm["account-group"] || null,     // Bank / Cash / ...

            });

        }

    }

    if (!accounts.length) {

        new Notice(`No accounts with type: account found in "${ACCOUNTS_FOLDER}".`);
        return "";

    }

    if (opts.type) {

        accounts = accounts.filter(a => a.type === opts.type);

    }
    if (opts.prefix) {

        accounts = accounts.filter(a => a.name.startsWith(opts.prefix));

    }

    accounts.sort((a, b) => a.name.localeCompare(b.name));

    const labels = accounts.map(a => {

        const typePart = a.type ? `[${a.type}] ` : "";
        const groupPart = a.group ? `[${a.group}] ` : "";
        return `${typePart}${groupPart}${a.label}`;
        //return `${typePart}${groupPart}${a.label} — ${a.name}`;

    });
    const values = accounts.map(a => a.name);

    return await tp.system.suggester(labels, values);

};
