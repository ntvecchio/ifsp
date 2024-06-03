-- CreateTable
CREATE TABLE `evento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_visitacao` DATETIME(3) NOT NULL,
    `valor_inteira` DOUBLE NULL,
    `ingressos_disponiveis` INTEGER NULL,
    `ingressos_isencao_disponiveis` INTEGER NULL,
    `disponibilidade_ilimitada` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NULL,
    `evento_id` INTEGER NULL,
    `pedido_data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pedido_valor_pago` DOUBLE NULL,
    `ingresso_codigo` VARCHAR(191) NULL,
    `ingresso_utilizacao` DATETIME(3) NULL,
    `ingresso_tipo` ENUM('Inteira', 'MeiaEntrada', 'Isencao', 'Co', 'Vip') NULL,
    `NomeEvento` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `pedido_ingresso_codigo_key`(`ingresso_codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NULL,
    `nascimento` DATETIME(3) NULL,
    `nome_completo` VARCHAR(191) NULL,
    `sexo` ENUM('masculino', 'feminino', 'outro') NULL,
    `telefone` VARCHAR(191) NULL,
    `tipo` ENUM('Administrador', 'Funcionario', 'Cliente') NULL,
    `usuario` VARCHAR(191) NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    UNIQUE INDEX `usuario_cpf_key`(`cpf`),
    UNIQUE INDEX `usuario_usuario_key`(`usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_evento_id_fkey` FOREIGN KEY (`evento_id`) REFERENCES `evento`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
