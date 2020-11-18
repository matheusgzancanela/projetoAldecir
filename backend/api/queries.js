module.exports = {
    // categoryWithChildren: `
    //     WITH RECURSIVE subcategories (id) AS (
    //         SELECT id FROM categories WHERE id = ?
    //         UNION ALL
    //         SELECT c.id FROM subcategories, categories c
    //             WHERE "parentId" = subcategories.id
    //     )
    //     SELECT id FROM subcategories
    // `    
    categoryWithChildren: `
        select  id,
        name,
        parentId 
        from    (select * from categories
            order by id) categories_sorted,
            (select @pv := ?) initialisation
        where   find_in_set(parentId, @pv)
        and     length(@pv := concat(@pv, ',', id))
    `
}